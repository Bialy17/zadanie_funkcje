const checkMajority = (event) => {
    event.preventDefault();
    const age = Number(document.getElementById("age").value);
    const majorityText = document.getElementById("majority-checked");
    if(age < 18) majorityText.innerHTML = "Jesteś niepełnoletni";
    else majorityText.innerHTML = "Jesteś pełnoletni";
}
const ageButton = document.getElementById("checkAge");

ageButton.addEventListener("click", checkMajority);