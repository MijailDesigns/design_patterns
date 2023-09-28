// component

class ProductComponent{
    constructor(name){
        this.name = name;
    }

    getDetail(){
        return `${this.name}`;
    }
}

// decorator

class ProductDecorator{
    constructor(productComponent){
        this.productComponent = productComponent;
    }

    getDetail(){
        return this.productComponent.getDetail();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator{
    constructor(productComponent, tradename, brand){
        super(productComponent);

        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail(){
        return `${this.tradename} ${this.brand} ` +
            super.getDetail();
    }
}

class StoreProductDecorator extends ProductDecorator{
    constructor(productComponent, price){
        super(productComponent);

        this.price = price;
    }

    getDetail(){
        return super.getDetail() +
            ` $ ${this.price}`;
    }
}

class HTMLProductDecorator extends ProductDecorator{
    getDetail(){
        return `<h1>Información del producto</h1>
        <p>
            ${super.getDetail()}
        </p>`
    }
}

// Execution
// component

const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());


// decorator 1 con component

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's")
console.log(commercialInfoProduct.getDetail());

// decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 25);
console.log(storeProduct.getDetail())

// decorator 2 con decorator 1
const product = new StoreProductDecorator(commercialInfoProduct, 25);
console.log(product.getDetail())

// decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail(); 