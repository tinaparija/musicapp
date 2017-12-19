console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  console.log("Document loaded");

  //on page load, GET all moods
  // $.get('/api/moods').success(function (moods) {
  //   moods.forEach(function(mood) {
  //     renderMood(mood);
  //   });
  // });

  $(".mood").on('click', function(e) { //changed mood color on click
    $(this).css("background", "orange");
  })








function renderMood(mood) {

};

function onError() {

};


}); //document ready end
