console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  console.log("Document loaded");

  $.ajax({
    method: 'GET',
    url: '/api/moods',
    success: onGetSuccess,
    error: onError
  });

  $(".mood").on('click', function(e) {
    $(this).css("background", "orange");
    //remove previous mood
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







function renderMood(mood) {
// add in correct path to color hex and mood name to display the buttons
  let moodSelections = `<div class="col-2 mood" style="background-color:${mood.color}">${mood.name}</div>`
  $(".mood-selection").append(moodSelections);
};

function displayMood(mood) {
  //
};

function onGetSuccess(moodsData) {
  moodsData.forEach(function(mood) {
    renderMood(mood);
  });
};

function onError(err) {
  console.log("There was an error ", err);
};


}); //document ready end
