"use strict";
class Pizza {
    constructor(size, extraCheese, pepperoniToppings, hamTopppings, pineappleToppings) {
        this.calculatePrice = (basePrice, toppingPrice, cheesePrice) => {
            const toppings = this.pepperoniToppings + this._hamToppings + this._pineappleToppings;
            const totalToppings = toppings * toppingPrice;
            const hasCheese = this._extraCheese ? 1 : 0;
            const totalCheese = hasCheese * cheesePrice;
            const totalPrice = basePrice + totalToppings + totalCheese;
            return totalPrice;
        };
        this._size = size;
        this._extraCheese = extraCheese;
        this._pepperoniToppings = pepperoniToppings;
        this._hamToppings = hamTopppings;
        this._pineappleToppings = pineappleToppings;
    }
    //   Getters
    get size() {
        return this._size;
    }
    get extraCheese() {
        return this._extraCheese;
    }
    get pepperoniToppings() {
        return this._pepperoniToppings;
    }
    get hamToppings() {
        return this._hamToppings;
    }
    get pineappleToppings() {
        return this._pineappleToppings;
    }
    //   Setters
    set size(v) {
        this._size = v;
    }
    set extraCheese(v) {
        this._extraCheese = v;
    }
    set pepperoniToppings(v) {
        this._pepperoniToppings = v;
    }
    set hamToppings(v) {
        this._hamToppings = v;
    }
    set pineappleToppings(v) {
        this._pineappleToppings = v;
    }
    /**
     * genCost
     */
    genCost() {
        switch (this.size) {
            case "small":
                return this.calculatePrice(10, 2, 2);
            case "medium":
                return this.calculatePrice(12, 2, 4);
            case "large":
                return this.calculatePrice(14, 3, 6);
            case "extra-large":
                return this.calculatePrice(18, 4, 6);
            default:
                console.log("Unable to calculate on this size");
                return 0;
        }
    }
}
const pizza1 = new Pizza("small", true, 4, 2, 1);
pizza1.extraCheese = false;
console.log("Pizza 1:", pizza1.genCost());
const pizza2 = new Pizza("medium", true, 4, 4, 4);
console.log("Pizza 2:", pizza2.genCost());
const pizza3 = new Pizza("large", false, 1, 3, 4);
pizza3.extraCheese = true;
console.log("Pizza 3:", pizza3.genCost());
console.log(pizza1.size);
console.log(pizza2.extraCheese);
console.log(pizza3.pepperoniToppings);
console.log(pizza3.hamToppings);
pizza3.pineappleToppings = 0;
console.log("Pizza 3:", pizza3.genCost());
