$("#form").submit(function(event){
  event.preventDefault();

  var primeInput = parseInt($("#primeInput").val());
  var numbers = []

  for (i = 2; i <= primeInput; i++) {
    numbers.push(i);
  }
  console.log(numbers);

  for (i = 1; i <=primeInput; i++) {
    for (j = 0; j <= primeInput; j++) {

      if ((numbers[j] % i) === 0) {

        numbers.splice(j, 1);

      }

    }
  }

  console.log(numbers);
})
