// const lowerBtn = document.querySelector("#lowerCountBtn");
// const addBtn = document.querySelector("#addCountBtn");
// const counter = document.querySelector(".counter");
// let count = 0;
// lowerBtn.addEventListener("click", lowerCount);

// function changeColor() {
//   if (count > 0) {
//     counter.style.color = "blue";
//   } else if (count == 0) {
//     counter.style.color = "white";
//   } else {
//     counter.style.color = "red";
//   }
// }

// function lowerCount() {
//   count -= 1;
//   counter.innerHTML = count;
//   changeColor();
// }

// addBtn.addEventListener("click", addCount);

// function addCount() {
//   count += 1;
//   counter.innerHTML = count;
//   changeColor();
// }

const checkBtn = document.querySelector("#checkBtn");
const inputNumber = document.querySelector("#inputNumber");
inputNumber.addEventListener("keyup", function (f) {
  if (f.keyCode === 13) {
    document.querySelector("#checkBtn").click(checkNumber);
  }
});

checkBtn.addEventListener("click", checkNumber);

function checkNumber() {
  isPerfect = inputNumber.value;

  let number = 1;
  for (i = 2; i < isPerfect; i++) {
    if (isPerfect % i) {
      continue;
    } else {
      number += i;
    }
  }
  if (number == isPerfect) {
    document.querySelector("#result").innerHTML =
      isPerfect + " is a perfect number";
    inputNumber.value = "";
  } else {
    document.querySelector("#result").innerHTML =
      isPerfect + " is  not a perfect number";
    inputNumber.value = "";
  }
}

// if (firstClause.value === "") {
//   alert("Please enter a sentence");
// }
