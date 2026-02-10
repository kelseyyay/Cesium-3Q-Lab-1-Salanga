const E = 2.7183;
const R = 0.000084611;

function calculateRateOfGrowth() {
    const populationInitial = parseFloat(document.getElementById("initialPopulation").value);
    const timeBacteria = parseFloat(document.getElementById("time").value);

    const finalPopulation = populationInitial * Math.pow(E, R * timeBacteria);

    document.getElementById("result").innerText = "Final Population: " + finalPopulation;
}