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
    $.ajax({
      method: 'GET',
      url: '/api/moods/'+$(this).attr('data-id'),
      success: onGetOneSuccess,
      error: onError
    });
  });

  $('#addMoodButton').on('click', function(e) {
    $('#addMoodModal').modal(); //triggers modal to add new mood
      $('form').on('submit', function(e) {
        //e.preventDefault();
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

  $(document).on('click','#addSongButton', function(e) {
    $('#addSongModal').modal(); //triggers modal to add a new song
    console.log("Song modal open!")
    // $('form').on('submit', function(e) {
    //   console.log("button clicked");
    //   $.ajax({
    //     method: 'POST',
    //     url: '/api/moods/:id/songs',
    //     data: $('form').serialize(),
    //     success: onPostSongSuccess,
    //     error: onError
    // });
  // });
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
        let accordionHtml = `<div class="item" data-id=${songId}>
          <a data-toggle="collapse" data-parent="#songsAccordion" href="#songAccordion${i+1}" aria-expanded="false" aria-controls="songAccordion${i+1}">
            "${songName}" by ${songArtist}
          </a>

          <div id="songAccordion${i+1}" class="collapse" role="tabpanel">
            <div><iframe width="50%" height="300" scrolling="no" frameborder="no" src="${songUrl}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div>

            <p class="mb-3">${songNotes}</p>
            <div class="form-group col-md-6" style="display: none">
              <label for="editNotes">Notes:</label>
              <textarea class="form-control" id="editNotes" rows="3"></textarea>
                <button type="button" class="btn btn-light">Save</button>
            </div>
            <button type="button" class="btn btn-light"><i class="far fa-edit"></i></button>
            <button type="button" class="btn btn-dark"><i class="fas fa-times"></i></button>
          </div>
        </div>`
        $("#songsAccordion").append(accordionHtml);
      };
};

function displayMood(mood) {
  $(".current-mood").empty();
  let titleContent = `<div class="row" data-id=${mood._id}>
      <div class="col-md-6 mood-title"><h1>${mood.name}</h1></div>
      <div class="col-md-6 mood-title"><p>${mood.description}</p></div>
    </div>
    <div class="col-md-6 mood-title"><h3>SONGS</h3></div>`
  let accordionDiv = `<div class="col-md-12" id="songsAccordion" data-children=".item"></div>`
  let addSongButton = `<div class="col-md-12"><button type="button" id="addSongButton"class="btn btn-light"><i class="fas fa-plus"></i></button></div>`
    $(".current-mood").append(titleContent);
    $(".current-mood").append(accordionDiv);
    displayAccordionContent(mood);
    $(".current-mood").append(addSongButton);
}

function onGetSuccess(moodsData) {
  console.log(moodsData);
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

function onError(err) {
  console.log("There was an error ", err);
};


}); //document ready end
