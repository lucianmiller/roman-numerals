$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const userNumber = parseInt($("#number").val());
    console.log(userNumber);
  });
});