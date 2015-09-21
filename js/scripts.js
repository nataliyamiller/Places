
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedAttractionName = $("input#new-attraction-name").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedRating = parseInt($("input#new-rating").val());

    var newAttraction = { name: inputtedAttractionName, city: inputtedCity, state: inputtedState,
    rating: inputtedRating };

    $("ul#places").append("<li><span class='attraction'>" + newAttraction.name + "</span></li>");

    $("input#new-attraction-name").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-rating").val("");
  });
});
