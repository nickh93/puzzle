$("#form").submit(function(event) {
  event.preventDefault();

  var strPalindrome = $("input#palindromeInput").val();
  console.log(strPalindrome)

  var paliArray = strPalindrome.split("");
  console.log("Array: " + paliArray)

  var reversed = paliArray.reverse();
  console.log("Reversed: " + reversed);

  var strReversed = reversed.join("")

  console.log(strReversed);

  if (strPalindrome === strReversed) {
    alert("You have a palindrome!")
  }
  else {
    alert("That's not a palindrome!")
  }
});
