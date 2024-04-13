function CalculateTotal() {
    var CostPerLiter = parseFloat(document.getElementById('Cost-Per-Liter').value);
    var LitersPurchased = parseFloat(document.getElementById('Liters-Purchased').value);
    var TotalCost = CostPerLiter * LitersPurchased;
    document.getElementById('Total-Cost').innerText = "Total Cost: AED" + TotalCost.toFixed(2);
}
