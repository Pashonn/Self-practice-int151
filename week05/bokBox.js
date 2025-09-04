export class Box{
    constructor(item,quantity,price){
        this.item = item
        this.quantity = quantity
        this.price = price
    }
    total(){
        return this.quantity * this.price
    }
}
