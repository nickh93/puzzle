$("#factorialForm").submit(function(event){
  event.preventDefault();

  var numberInput = parseInt($("input#factorialInput").val());
  console.log(numberInput);

  var multipliers = 1;

  for (var i = numberInput; i > 0; i--) {
    multipliers *= i
  }
  console.log(multipliers)
});
