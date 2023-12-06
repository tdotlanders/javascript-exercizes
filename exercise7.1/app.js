const currencyValues = {
  EUR: 1,
  USD: 1.07,
  GBP: 0.87,
};

const tableBodyNode = document.querySelector("#table-body");

const ordersPromise = fetch("http://116.203.151.6:3000/orders");
const productsPromise = fetch("http://116.203.151.6:3000/products");

const [orderResponse, productsResponse] = await Promise.all([
  ordersPromise,
  productsPromise,
]);

const [orders, products] = await Promise.all([
  orderResponse.json(),
  productsResponse.json(),
]);
for (const order of orders) {
  const orderCurrency = order.currency;

  for (const productFromOrder of order.products) {
    const foundProduct = products.find(
      (productFromDb) => productFromOrder.name === productFromDb.name
    );

    const productCurrency = foundProduct.currency;

    const price = productFromOrder.quantity * foundProduct.price;

    const convertedPrice = convertCurrency(
      price,
      productCurrency,
      orderCurrency
    );

    productFromOrder.price = convertedPrice;
  }
}

console.log(orders);
console.log(products);

buildOrdersList(orders);

function buildOrdersList(orders) {
  for (const order of orders) {
    const orderRow = document.createElement("tr");

    const id = document.createElement("td");
    const status = document.createElement("td");

    id.textContent = order.id;

    const innerStatusBadge = document.createElement("div");
    innerStatusBadge.classList.add("status-badge");
    innerStatusBadge.textContent = `${order.status
      .charAt(0)
      .toUpperCase()}${order.status.slice(1)}`;

    switch (order.status) {
      case "processing":
        innerStatusBadge.classList.add("status-warning");
        break;
      case "shipped":
        innerStatusBadge.classList.add("status-success");
        break;
      case "cancelled":
        innerStatusBadge.classList.add("status-error");
        break;
      default:
        innerStatusBadge.classList.add("status-info");
    }

    status.appendChild(innerStatusBadge);

    orderRow.appendChild(id);
    orderRow.appendChild(status);

    tableBodyNode.appendChild(orderRow);
  }
}

function convertCurrency(value, fromCurrency, toCurrency) {
  const conversionRate =
    currencyValues[toCurrency] / currencyValues[fromCurrency];
  const convertedValue = value * conversionRate;

  return convertedValue;
}
