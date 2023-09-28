interface Component{
    getDetail(): string;
}

class ProductComponent implements Component{

    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    public getDetail(): string {
        return `${this.name}`;
    }
}

// decorator
abstract class ProductDecorator implements Component{
    protected component: Component;

    constructor(component: Component){
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }
}

// decorator 1

class CommercialInfoProductDecorator extends ProductDecorator{
    
    private tradename: string;
    private brand: string;

    constructor(component: Component, tradename: string, brand: string){
        super(component);

        this.tradename = tradename;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradename} ${this.brand} ` +
         super.getDetail();
    }
}

// decorator 2

class StoreProductDecorator extends ProductDecorator{
    
    private price: number;

    constructor(component: Component, price: number){
        super(component);

        this.price = price;
    }

    public getDetail(): string {
        return super.getDetail() + ' ' + ` ${this.price}`;
    }
}

// decorator 3

class HTMLProductDecorator extends ProductDecorator{

    getDetail(): string {
        return `<h1>Informacion del producto</h1>
        <p>
            ${super.getDetail()}
        </p>`;
    }
}

// Ejecucion
// component

const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());

// decorator 1 con component

const productCommercial = 
    new CommercialInfoProductDecorator(productComponent, 'London Porter', "Fuller's")
console.log(productCommercial.getDetail())

const productStore = 
    new StoreProductDecorator(productComponent, 25)
console.log(productStore.getDetail())

// decorator 2 en decorator 1
const productStore2 = 
    new StoreProductDecorator(productCommercial, 25)
    console.log(productStore2.getDetail())

// decorator 3 con decorator 2 con decorator 1

const htmlProduct = 
    new HTMLProductDecorator(productStore2)
    console.log(htmlProduct.getDetail())