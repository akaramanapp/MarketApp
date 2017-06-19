export class Product {
    name: string;
    category: string;
    price: number;
    description: string;

    constructor(Name: string, Category: string, Price: number, Description: string) {
        this.name = Name;
        this.category = Category;
        this.price = Price;
        this.description = Description;
    }
}