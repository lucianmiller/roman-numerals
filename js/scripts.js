//Business Logic------------
function convertNumber(num) {
  const numList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanList = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let outputArray = [];
  if (num > 3999 || num <= 0) return "Please enter a number greater then 0 and less then 3,999";
};

//User Logic---------------
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const userNumber = parseInt($("#number").val());
    const convertedNumber = (convertNumber(userNumber));
    console.log(convertedNumber);
    console.log(userNumber);
    $("#roman").text(convertedNumber);
  });
});