class Pizza {
  private _size: string;
  private _extraCheese: boolean;
  private _pepperoniToppings: number;
  private _hamToppings: number;
  private _pineappleToppings: number;

  private calculatePrice = (
    basePrice: number,
    toppingPrice: number,
    cheesePrice: number
  ): number => {
    const toppings =
      this.pepperoniToppings + this._hamToppings + this._pineappleToppings;
    const totalToppings = toppings * toppingPrice;
    const hasCheese = this._extraCheese ? 1 : 0;
    const totalCheese = hasCheese * cheesePrice;
    const totalPrice = basePrice + totalToppings + totalCheese;
    return totalPrice;
  };

  constructor(
    size: string,
    extraCheese: boolean,
    pepperoniToppings: number,
    hamTopppings: number,
    pineappleToppings: number
  ) {
    this._size = size;
    this._extraCheese = extraCheese;
    this._pepperoniToppings = pepperoniToppings;
    this._hamToppings = hamTopppings;
    this._pineappleToppings = pineappleToppings;
  }
  //   Getters
  public get size(): string {
    return this._size;
  }

  public get extraCheese(): boolean {
    return this._extraCheese;
  }

  public get pepperoniToppings(): number {
    return this._pepperoniToppings;
  }

  public get hamToppings(): number {
    return this._hamToppings;
  }

  public get pineappleToppings(): number {
    return this._pineappleToppings;
  }

  //   Setters
  public set size(v: string) {
    this._size = v;
  }

  public set extraCheese(v: boolean) {
    this._extraCheese = v;
  }

  public set pepperoniToppings(v: number) {
    this._pepperoniToppings = v;
  }

  public set hamToppings(v: number) {
    this._hamToppings = v;
  }

  public set pineappleToppings(v: number) {
    this._pineappleToppings = v;
  }

  /**
   * genCost
   */
  public genCost(): number {
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