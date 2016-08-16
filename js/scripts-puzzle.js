$("#sentence form").submit(function(event) {
  event.preventDefault();

  var sentenceInput = $("input#sentenceInput").val();
  var sentenceArray = sentenceInput.split("");
  console.log("array " + sentenceArray);

  for (var i = 0; i < sentenceArray.length; i++) {
    var letters = sentenceArray[i];

    if ((letters === "a") || (letters ==="e") || (letters === "i") || (letters === "o") || (letters === "u")) {
      sentenceArray.splice(i, 1, "-")
    };
    console.log(sentenceArray);
    var replacedString = sentenceArray.join("");
    console.log(replacedString);

    $(".puzzle").text(replacedString);
  };
});
