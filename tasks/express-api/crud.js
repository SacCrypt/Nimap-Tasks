const express = require("express");
const app = express();
let products = [
  {
    id: 1,
    item: "Fruit",
  },
  {
    id: 2,
    item: "Chair",
  },
  {
    id: 3,
    item: "Rock",
  },
];

app.use(express.json());

//Get all products
app.get("/products", (req, res) => {
  console.log(products);
  res.json(products);
});

//Get Product with id
app.get("/products/:id", (req, res) => {
  const product = products.find((item) => {
    return item.id == parseInt(req.params.id);
  });
  if (!product) {
    res.status(404).json({ status: "Failure", message: "id not found" });
  }
  console.log(products);
  res.json(product);
});

app.post("/products", (req, res) => {
  const product = {
    id: products.length + 1,
    item: req.body.item,
  };
  products.push(product);
  console.log(products);

  res.json(product);
});

app.put("/products/:id", (req, res) => {
  const product = products.find((item) => item.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).send("product not found.");
  }
  product.item = req.body.item;
  console.log(products);

  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  const product = products.find((item) => item.id === req.params.id);
  if (!product) {
    res.status(404).json({ status: false, message: "Not Found" });
  } else {
    delete products[req.params.id];
    console.log(products);

    res.status(200);
  }
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
