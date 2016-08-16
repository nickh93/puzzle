// var counter = 0; // we start at zero
// var fives = 5; // variable that holds what will be added to the counter
// for (var i = 0; i <= 5; i += 1) {  // i starts at 0, gets added 1 per loop, up to 5
//   counter += fives; // counter, which begins at 0, is added 5 in each loop
//   console.log(counter);
// }
//
// // var counter = 0;
// // var sevens = 7;
// // for (var i= 0; i<= 6; i += 1) {
// //   counter += sevens;
// //   console.log(counter);
// // }

$("#form").submit(function(event) {
  event.preventDefault();

  var targetNum = parseInt($("input#countTo").val());
  var counterNum = parseInt($("input#countBy").val());
  // console.log(targetNum)
  // console.log(counterNum)
  var output = [];

  if ((targetNum > 0) && (counterNum > 0)) {
    for (i = 0; i <= targetNum; i += counterNum) {
    console.log(i)
    output.push(i)
    };

  } else if ((targetNum < 0) || (counterNum < 0)){

      alert("ERROR. Please enter a positive number.")

  } else if (targetNum < counterNum) {

      alert("ERROR. Make sure your Count to is larger than Count By")

  } else {

    alert("ERROR. Please enter a number")

  }

  var outputString = output.join(", ");
  $(".display").text(outputString);



  console.log(output);
});
