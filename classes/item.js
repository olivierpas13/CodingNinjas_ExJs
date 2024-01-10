class Item {
    name;
    price;
    slotsRequired;

    constructor(name, price, slotsRequired) {
        this.name = name;
        this.price = price;
        this.slotsRequired = slotsRequired;
    }

    toJSON() {
        return {
            name: this.name,
            price: this.price,
            slotsRequired: this.slotsRequired,
        };
    }
}

export default Item;
