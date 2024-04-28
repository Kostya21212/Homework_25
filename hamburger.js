class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
        this.prices = {
            small: 50,
            big: 100,
            cheese: 10,
            salad: 20,
            potato: 15,
            mayo: 10,
            seasoning: 15,
        };
        this.caloriesTable = {
            small: 20,
            big: 40,
            cheese: 20,
            salad: 5,
            potato: 10,
            mayo: 5,
            seasoning: 0
        };
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let price = this.prices[this.size] + this.prices[this.stuffing]+  this.toppings
        .map((topping) => this.prices[topping])
        .reduce((a, b) => a + b, 0)
    return price
        
    }

    calculateCalories() {
        let calories = this.caloriesTable[this.size] + this.caloriesTable[this.stuffing];
        this.toppings.forEach(topping => {
            calories += this.caloriesTable[topping];
        });
        return calories;
    }
}

document.getElementById("calculateBtn").addEventListener("click", function() {
    const size = document.getElementById('burgerSize').value;
    const stuffing = document.getElementById('burgerStuffing').value;
    const mayoChecked = document.getElementById('mayo').checked;
    const seasoningChecked = document.getElementById('seasoning').checked;

    const hamburger = new Hamburger(size, stuffing);

    if (mayoChecked) {
        hamburger.addTopping('mayo');
    }

    if (seasoningChecked) {
        hamburger.addTopping('seasoning');
    }

    const price = hamburger.calculatePrice();
    const calories = hamburger.calculateCalories();

    alert(`Стоимость бургера: ${price} грн\nКалорийность бургера: ${calories} калорий`);
});
