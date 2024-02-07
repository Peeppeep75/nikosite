"use steict";

function checkPersonality() {
  const birthdate = document.getElementById("birthdate");
  const gender = document.getSelection("gender");
}

let inputNumber;
if (year === 1950) {
  switch (month) {
    case 1:
      inputNumber = 32;
      break;
    case 2:
      inputNumber = 3;
      break;
    case 3:
      inputNumber = 31;
      break;
    case 4:
      inputNumber = 2;
      break;
    case 5:
      inputNumber = 32;
      break;
    case 6:
      inputNumberr = 3;
      break;
    case 7:
      inputNumber = 33;
      break;
    case 8:
      inputNumber = 4;
      break;
    case 9:
      inputNumber = 35;
      break;
    case 10:
      inputNumber = 5;
      break;
    case 11:
      inputNumber = 36;
      break;
    case 12:
      inputNumber = 6;
      break;
  }
} else if (year === 1951) {
  //ここに追加で書いていくのかな・・・？
}

const day = birthdate();
Number += day;

if (Number >= 60) {
  Number -= 60;
}

//男女によってページ表記を変える
