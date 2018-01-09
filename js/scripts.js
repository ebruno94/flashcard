$(document).ready(function() {
  $(".flashcard").click(function() {
    $(this).children("h2").toggle();
    $(this).children("p").toggle();
  });
});
