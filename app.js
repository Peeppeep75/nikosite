// app.js

function calculateLifePath() {
  var birthdateInput = document.getElementById("birthdate");
  var resultDiv = document.getElementById("result");

  var birthdate = new Date(birthdateInput.value);

  var lifePathNumber = calculateLifePathNumber(birthdate);

  resultDiv.innerHTML =
    "あなたのLife Path Numberは " + lifePathNumber + " です。";

  sessionStorage.setItem("lifePathNumber", lifePathNumber);

  window.location.href = "result.html";
}
