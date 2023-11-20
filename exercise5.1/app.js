const orders = [
  { id: "A658", status: "draft", products: ["T-Shirt", "Polo"] },
  { id: "A446", status: "processing", products: ["T-Shirt"] },
  { id: "A883", status: "draft", products: ["Polo", "Polo"] },
  { id: "A234", status: "processing", products: ["Camisa", "Saia"] },
  { id: "A754", status: "cancelled", products: ["Saia"] },
  { id: "A236", status: "shipped", products: ["Sweatshirt", "Vestido"] },
  { id: "A467", status: "processing", products: ["Camisa", "Saia"] },
  { id: "A213", status: "cancelled", products: ["Vestido", "Top"] },
  { id: "A783", status: "processing", products: ["T-Shirt", "Polo"] },
  { id: "A364", status: "shipped", products: ["T-Shirt", "Polo"] },
];

const tableBodyContent = document.querySelector("#table-bd");

for (const order of orders) {
  const orderRow = document.createElement("tr");

  const id = document.createElement("td");
  const status = document.createElement("td");
  const products = document.createElement("td");

  id.textContent = order.id;
  status.textContent = order.status;
  products.textContent = order.products.join();

  orderRow.appendChild(id);
  orderRow.appendChild(status);
  orderRow.appendChild(products);

  tableBodyContent.appendChild(orderRow);

  const statusBadge = document.createElement("div");
  statusBadge.classList.add("status-badge");
  statusBadge.textContent = order.status;
}
