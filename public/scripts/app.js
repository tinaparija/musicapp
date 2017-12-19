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
    displayMood(mood);
  });








function renderMood(mood) {
// add in correct path to color hex and mood name to display the buttons
  let moodSelections = `<div class="row mood-selection" style="background-color:${getColorHex}"><div class="col-1 mood mood-block"><span class="mood-title">${dataNameHere}</span></div>`
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
