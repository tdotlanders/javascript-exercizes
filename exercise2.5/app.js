var order = {
    code: "001",
    costumer: {
        name: "Carlos Silva",
        email: "carlo.silva13@gmail.com",
    },
    price: {
        value: 11.237390248,
        currency: "$",
    },
    isShiped: false,
    products: ["T-shirt branca"],
};
order.isShiped = true;
var formattedPriceValue = order.price.value.toFixed(2).replace(".", ",");
var formattedPrice = "".concat(order.price.currency).concat(formattedPriceValue);
order.products.push("T-shirt Preta");
console.log(formattedPrice);
