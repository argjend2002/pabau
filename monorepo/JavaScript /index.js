document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("checkboxForm");
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');


  function shuffleValues() {
    const checkboxArray = Array.from(checkboxes);
    const shuffledValues = checkboxArray.map((checkbox) => checkbox.value).sort(() => Math.random() - 0.5);
  
    checkboxArray.forEach((checkbox, index) => {
      checkbox.value = shuffledValues[index];
      checkbox.nextSibling.textContent = shuffledValues[index];
    });
  }

  function changeValues() {
    Array.from(checkboxes).forEach((checkbox) => {
      checkbox.value = "Argjend";
      checkbox.nextSibling.textContent = "Argjend";
    });
  }

  function showSelectedValues() {
    const selectedValues = Array.from(checkboxes).filter((checkbox) => checkbox.checked) .map((checkbox) => checkbox.value);

    document.getElementById("output").innerText = selectedValues.join(", ");
  }

  document.getElementById("shuffleButton").addEventListener("click", shuffleValues);
  document.getElementById("changeButton").addEventListener("click", changeValues);
  document.getElementById("showButton").addEventListener("click", showSelectedValues);
});