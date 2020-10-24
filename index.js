const checkBtn = document.querySelector("#check");
const inputNumber = document.querySelector("#guess");
inputNumber.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    document.querySelector("#check").click();
  }
});

checkBtn.addEventListener("click", checkNumber);

function checkNumber() {
  isPerfect = inputNumber.value;
  let number = 1;
  if (number < 1 || number === "" || isNaN(number)) {
    document.querySelector("#answer").innerHTML =
      "⚡⚡Please Enter A Positive Number⚡⚡";
  } else {
    for (i = 2; i < isPerfect; i++) {
      if (isPerfect % i) {
        continue;
      } else {
        number += i;
      }
    }
    if (number == isPerfect) {
      document.querySelector(
        "#answer"
      ).innerHTML = `${isPerfect} is a perfect number 🎯`;
    } else {
      document.querySelector(
        "#answer"
      ).innerHTML = `${isPerfect} is not a perfect number ❌`;
    }
    inputNumber.value = "";
    inputNumber.focus();
  }
}
