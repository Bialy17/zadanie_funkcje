let setOfNumbers = [2, 3, 21, 10, 4, 2, 53, 32, 10, 4];
const lengthOfSet = setOfNumbers.length;

setOfNumbers.forEach(element => document.getElementById("set-of-numbers").textContent += ` ${element}`);

function calculateAverage() {
    let sum = 0;
    for(i = 0; i < lengthOfSet; i++) {
        sum += setOfNumbers[i];
    }
    document.getElementById("average").innerHTML = `Średnia: ${sum / lengthOfSet}`;
}

function findMinMaxValue() {
    for(i = 0; i < lengthOfSet; i++) {
        for(j = i; j < lengthOfSet - 1; j++) {
            if(setOfNumbers[j] > setOfNumbers[j+1]) {
                let temp = setOfNumbers[j+1];
                setOfNumbers[j+1] = setOfNumbers[j];
                setOfNumbers[j] = temp;
            }
        }
    }
    document.getElementById("min").innerHTML = `Wartość minimalna: ${setOfNumbers[0]}`;
    document.getElementById("max").innerHTML = `Wartość maksymalna: ${setOfNumbers[lengthOfSet-1]}`;
}


calculateAverage()
findMinMaxValue()