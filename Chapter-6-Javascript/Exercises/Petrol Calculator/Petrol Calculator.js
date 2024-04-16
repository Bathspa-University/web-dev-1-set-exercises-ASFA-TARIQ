// function to calculate total
function CalculateTotal() {
    var CostPerLiter = parseFloat(document.getElementById('Cost-Per-Liter').value); //Getting user data by id
    var LitersPurchased = parseFloat(document.getElementById('Liters-Purchased').value);  //Getting user data by id
    var TotalCost = CostPerLiter * LitersPurchased; //Calculating total of CostPerLiter LitersPurchased
    document.getElementById('Total-Cost').innerText = "Total Cost: AED" + TotalCost.toFixed(2); //displaying totql cost
}
