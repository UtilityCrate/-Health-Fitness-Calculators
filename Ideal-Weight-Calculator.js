
function calculateIdealWeight() {
    const heightCm = parseFloat(document.getElementById("heightCm").value);

    if (!heightCm || heightCm <= 0) {
        alert("Please enter a valid height in centimeters.");
        return;
    }

    const heightM = heightCm / 100;
    
    // BMI healthy range: 18.5 to 24.9
    const minWeight = 18.5 * heightM * heightM;
    const maxWeight = 24.9 * heightM * heightM;

    document.getElementById("idealWeightResult").innerHTML = `
        <p><strong>Ideal Weight Range:</strong></p>
        <p>🔸 Minimum: <strong>${minWeight.toFixed(1)} kg</strong></p>
        <p>🔸 Maximum: <strong>${maxWeight.toFixed(1)} kg</strong></p>
    `;
}
