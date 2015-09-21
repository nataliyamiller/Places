
$(function() {
  $("form#new-attraction-name").submit(function(event) {
    event.preventDefault();

    var inputtedAttractionName = $("input#new-attraction-name").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedRating = parseInt($("input#new-rating").val());
  })
})
