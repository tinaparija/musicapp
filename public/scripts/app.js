console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  console.log("Document loaded");

  $.ajax({
    method: 'GET',
    url: '/api/moods',
    success: onGetSuccess,
    error: onError
  });

  $(".mood").on('click', function(e) { //displays the content of the mood user clicked on
    console.log("Click detected");
    //remove previous mood, display content of new one
    //displayMood(mood);
  });

  $('#addMoodButton').on('click', function(e) {
    $('#addMoodModal').modal(); //triggers modal to add new mood
    console.log("Mood modal open!")
      // $('form').on('submit', function(e) {
      //   console.log("button clicked");
      //   $.ajax({
      //     method: 'POST',
      //     url: '/api/moods',
      //     data: $('form').serialize(),
      //     success: onPostSuccess,
      //     error: onError
      // });
    // });
  });

  $('#addSongButton').on('click', function(e) {
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
// add in correct path to color hex and mood name to display the buttons
  let moodSelections = `<div class="col-2 mood" style="background-color:${mood.color}">${mood.name}</div>`
  $(".mood-selection").prepend(moodSelections);
};

function displayMood(mood) {

  let titleContent = `  <div class="row">
      <div class="col-md-6 mood-title"><h1>${mood.name}</h1></div>
      <div class="col-md-6 mood-title"><p>${mood.description}</p></div>
    </div>
    <div class="col-md-4 mood-title"><h3>SONGS</h3></div>`
  let accordionHtml = `<div class="item">
    <a data-toggle="collapse" data-parent="#songsAccordion" href="#exampleAccordion${counter}" aria-expanded="false" aria-controls="exampleAccordion1">
      ${songsList.name} by ${songList.artist}
    </a>
    <div id="exampleAccordion${counter}" class="collapse" role="tabpanel">
      <div>iFrame embed ${songList.url}</div>
      <p class="mb-3">${songNotes}</p>
      <div class="form-group col-md-6">
        <label for="editNotes">Notes:</label>
        <textarea class="form-control" id="editNotes" rows="3"></textarea>
          <button type="button" class="btn btn-light">Save</button>
      </div>
      <button type="button" class="btn btn-light"><i class="far fa-edit"></i></button>
      <button type="button" class="btn btn-dark"><i class="fas fa-times"></i></button>
    </div>
  </div>`
  $("#songsAccordion").append(titleContent);
    let songsList = mood.songs;
    let counter = 1;
    songList.forEach(function(song){
      $("#songsAccordion").append(accordionHtml);
      counter++;
    });

};

function onGetSuccess(moodsData) {
  console.log(moodsData);
  moodsData.forEach(function(mood) {
    renderMoodButton(mood);
  });
};

function onError(err) {
  console.log("There was an error ", err);
};


}); //document ready end
