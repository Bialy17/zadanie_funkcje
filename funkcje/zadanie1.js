function returnOppositeNumber(event) {
    event.preventDefault();
    const number = Number(document.getElementById("number-input").value);
    return number * (-1);
}

document.getElementById("ex1-btn").addEventListener("click", async function() {
    const solution = await returnOppositeNumber(event);
    document.getElementById("opposite-number").innerHTML = `Liczba odwrotna: ${solution}`;
})