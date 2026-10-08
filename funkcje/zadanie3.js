const calculateCircuitOfCircle = new Function('r', 'return 2 * r * Math.PI;');

let radius = 5;

document.getElementById("circuit-og-circle").innerHTML = `Obwód koła o promieniu ${radius}: ${calculateCircuitOfCircle(radius)}`;