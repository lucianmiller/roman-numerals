$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const userNumber = parseInt($("#number").val());
    console.log(userNumber);

    const numList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romanList = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  });
});