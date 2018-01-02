console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  console.log("Document loaded");

  $.ajax({
    method: 'GET',
    url: '/api/moods',
    success: onGetSuccess,
    error: onError
  });


  $(document).on('click', 'div.mood', function(e) { //displays the content of one mood the user clicked on
      $(".mood").removeClass('active');
      $(this).addClass('active');
      $.ajax({
        method: 'GET',
        url: '/api/moods/'+$(this).attr('data-id'),
        success: onGetOneSuccess,
        error: onError
      });
    });

  // add new mood
  $('#addMoodButton').on('click', function(e) {
    $('#addMoodModal').modal(); //triggers modal to add new mood
      $('#addMood').on('submit', function(e) {
        let formData = $(this).serialize();
        $.ajax({
          method: 'POST',
          url: '/api/moods',
          data: formData,
          success: onPostOneSuccess,
          error: onError
      });
    });
  });

  $(document).on('click', '.addSongButton', function(e) {
    $('#addSongModal').modal(); //triggers modal to add a new song
    console.log("Song modal open!")
    let moodId = $(this).data('mood-id');
      $('#addSongForm').on('submit', function(e) {
        e.preventDefault();
        $('#addSongModal').modal('hide');
        $.ajax({
          method: 'POST',
          url: ('/api/moods/'+moodId+'/songs'),
          data: $('#addSongForm').serialize(),
          success: onPostSongSuccess,
          error: onError
        });
        this.reset();
      });
  });

  // edit notes on a song
  $(document).on('click', '.edit', function(e) {
    e.preventDefault();
    $(".editSpace").show();
    let songId = $(this).data('song-id');
    let moodId = $(this).data('mood-id');
    let reqUrl = ('/api/moods/' + moodId + '/songs/' + songId);

    $('.editSave').on('click', function(e){
      e.preventDefault();
      let editVal = $(`textarea.${songId}`).val();
      $.ajax({
        method: "PUT",
        url: reqUrl,
        data: {notes: editVal},
        success: function(data) {
          $(".editSpace").hide();
          let songs = data.songs;
          for(let i = 0; i < songs.length; i++) {
            if(songs[i]._id == songId) {
              $(`p.${songId}`).html(songs[i].notes);
            }
          }
        },
        error: onError
      });
    });
  });

  //delete a song on click of X button
  $(document).on('click', '.delete', function(e) {
    e.preventDefault();
    let delSong = confirm("Are you sure you want to delete this song?");
    if (delSong) {
      let songId = $(this).data('song-id');
      let moodId = $(this).data('mood-id');
      let reqUrl = ('/api/moods/' + moodId + '/songs/' + songId );
      $.ajax({
        method: 'DELETE',
        url: reqUrl,
        success: function(data) {
          displayMood(data);
        },
        error: onError
      });
    };
  });

  // delete a mood
  $(document).on('click', '.deleteMood', function(e) {
    let delMood = confirm("Are you sure you want to delete this mood?");
    if (delMood) {
    let moodId = $(this).data('mood-id');
      $.ajax({
      method: 'DELETE',
      url: ('/api/moods/' + moodId),
      success: function () {
        $('.current-mood').remove();
        location.reload();
      },
      error: onError
      });
    };
  });



  function renderMoodButton(mood) {
    let moodSelections = `<div class="col-2 mood" data-id=${mood._id} style="background-color:${mood.color}">${mood.name}</div>`
    $(".mood-selection").prepend(moodSelections);
  };

  function changeMoodBackground(mood) {
    let moodColor = mood.color;
    $(".current-mood").css("background-color", moodColor);
  }

  function displayAccordionContent(mood) {
    $("#songsAccordion").empty();
    let songsList = mood.songs;
    for (let i = 0; i < songsList.length; i++) {
      let songId = songsList[i]._id;
      let songName = songsList[i].name;
      let songArtist = songsList[i].artist;
      let songUrl = songsList[i].url;
      let songNotes = songsList[i].notes;
      let accordionHtml = `<div class="item" data-song-id=${songId}>
        <a data-toggle="collapse" data-parent="#songsAccordion" href="#songAccordion${i+1}" aria-expanded="false" aria-controls="songAccordion${i+1}">
          "${songName}" by ${songArtist}
        </a>
        <div id="songAccordion${i+1}" class="collapse" role="tabpanel">
          <div>${songUrl}</div>
          <p class="mb-3 ${songId}">${songNotes}</p>
          <div class="form-group col-md-6 editSpace" style="display: none">
            <label for="editNotes">Notes:</label>
            <textarea class="form-control editNotes ${songId}" rows="3" name="notes"></textarea>
              <button type="button" class="btn btn-light editSave">Save</button>
          </div>
          <button type="button" data-song-id=${songId} data-mood-id=${mood._id} class="btn btn-light edit"><i class="far fa-edit"></i></button>
          <button type="button" data-song-id=${songId} data-mood-id=${mood._id} class="btn btn-dark delete"><i class="fas fa-times"></i></button>
        </div>
      </div>`
      $("#songsAccordion").append(accordionHtml);
    };
  };

  function displayMood(mood) {
    let $currentMood = $(".current-mood");
    $currentMood.empty();
    let deleteMoodButton = `<button type="button" data-mood-id=${mood._id} class="btn btn-dark deleteMood">x</button>`
    let titleContent = `<div class="row" data-mood-id=${mood._id}>
        <div class="col-md-6 mood-title"><h1>${mood.name}</h1></div>
        <div class="col-md-6 mood-title"><p>${mood.description}</p></div>
      </div>
      <div class="col-md-6 mood-title"><h3>SONGS</h3></div>`
    let accordionDiv = `<div class="col-md-12" id="songsAccordion" data-children=".item"></div>`
    let addSongButton = `<hr><div class="col-md-12"><button type="button" data-mood-id=${mood._id} class="btn btn-light addSongButton">+</i></button></div>`
      $currentMood.append(titleContent);
      $currentMood.append(accordionDiv);
      displayAccordionContent(mood);
      $currentMood.append(addSongButton);
      $currentMood.append(deleteMoodButton);
  };

  function onGetSuccess(moodsData) {
    moodsData.forEach(function(mood) {
      renderMoodButton(mood);
    });
  };

  function onGetOneSuccess(oneMood) {
    changeMoodBackground(oneMood);
    displayMood(oneMood);
  };

  function onPostOneSuccess(postedSong) {
    renderMoodButton(postedSong);
    onGetOneSuccess(postedSong);
  };

  function onPostSongSuccess(postedSong) {
    displayAccordionContent(postedSong);
    ('#addSongModal').hide();
  };

   function onDeleteSuccess(postedSong) {
    displayAccordionContent(postedSong);

  };

  function onError(err) {
    console.log("There was an error ", err);
  };


}); //document ready end
