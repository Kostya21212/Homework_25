
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
            mayonez: 10,
            seasoning: 15
        };
        this.caloriesTable = {
            small: 20,
            big: 40,
            cheese: 20,
            salad: 5,
            potato: 10,
            mayonez: 5,
            seasoning: 0
        };
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let price = this.prices[this.size] + this.prices[this.stuffing];
        this.toppings.forEach(topping => {
            price += this.prices[topping];
        });
        return price;
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
    const toppings = Array.from(document.getElementById('burgerToppings').selectedOptions).map(option => option.value);

    if (toppings.length === 0) {
        const confirmResult = confirm("Вибір додаткових інгредієнтів залишиться порожнім. Продовжити без додаткових інгредієнтів?");
        if (!confirmResult) {
            return;
        }
    }

    const hamburger = new Hamburger(size, stuffing);

    toppings.forEach(topping => {
        hamburger.addTopping(topping);
    });

    const price = hamburger.calculatePrice();
    const calories = hamburger.calculateCalories();

    alert(`Вартість бургера: ${price} грн\nКалорійність бургера: ${calories} калорій`);
});
