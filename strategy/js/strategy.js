class SaleContext{
    constructor(strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    calculate(amount){
        return this.strategy.calculate(amount);
    }
}

class RegularSaleStrategy{
    constructor(tax){
        this.tax = tax;
    }

    calculate(amount){
        return amount + (amount * this.tax);
    }
}

class DiscountSaleStrategy{
    constructor(tax, discount){
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount){
        return amount + (amount * this.tax) - this.discount;
    }
}

class ForeignSaleStrategy{

    calculate(amount){
        return amount + this.getDollarPrice();
    }

    getDollarPrice(){
        return 20;
    }

}

// const regularSale = new RegularSaleStrategy(0.16);
// const discountSale = new DiscountSaleStrategy(0.16, 3);
// const foreignSale = new ForeignSaleStrategy();

// const sale = new SaleContext(regularSale)

// console.log(sale.calculate(10))
// console.log(sale.strategy)

// sale.setStrategy(discountSale)
// console.log(sale.calculate(10))
// console.log(sale.strategy)


// sale.setStrategy(foreignSale)
// console.log(sale.calculate(10))
// console.log(sale.strategy)

// ----------------Practica---------------

const data = [
    {
        name: "Erdinger Pikantus",
        country: "Alemania",
        info: "Erdinger Pikantus es una cerverza ....",
        img: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/205647-1200-1200?v=637814200579500000&width=1200&height=1200&aspect=true"
    },
    {
        name: "Corona",
        country: "Mexico",
        info: "Corona es una cerverza ....",
        img: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/205647-1200-1200?v=637814200579500000&width=1200&height=1200&aspect=true"
    },
    {
        name: "Delirium Tremens",
        country: "Belgica",
        info: "Delirium Tremens es una cerverza ....",
        img: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/205647-1200-1200?v=637814200579500000&width=1200&height=1200&aspect=true"
    }
]

class InfoContext{
    constructor(strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    show(){
        this.strategy.show(this.data, this.element)
    }
}

class ListStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<di>
            <h2>${beer.name}</h2>
            <p>${beer.country}</p>
        </di>
        <hr>`;
        }, "");
    }
}

class DetailedListStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<di>
            <h2>${beer.name}</h2>
            <p>${beer.country}</p>
            <p>${beer.info}</p>
        </di>
        <hr>`;
        }, "");
    }
}

class ListWithImagesStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<di>
            <h2>${beer.name}</h2>
            <img width="10%" src="${beer.img}" />
        </di>
        <hr>`;
        }, "");
    }
}

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy(),
    new ListWithImagesStrategy()
];


const info = new InfoContext(new ListStrategy(), data, content)
info.show()


slcOptions.addEventListener("change", (event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show()
});
