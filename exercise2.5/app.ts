const order = {
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

const formattedPriceValue = order.price.value.toFixed(2).replace(".", ",");

const formattedPrice = `${order.price.currency}${formattedPriceValue}`;

order.products.push("T-shirt Preta");

type Order = {
  code: string;
  costumer: {
    name: string;
    email: string;
  };
  price:{
    amount:number;
    currency:string;

  }
  isShipped: boolean
  products: string[]
  
console.log(formattedPrice);
