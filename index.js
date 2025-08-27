// index.js
const express = require("express");
const app = express();
const port = 3000;

// Impor semua rute
const aboutRouter = require("./routes/about_route");
const productsRouter = require("./routes/product_route");
const usersRouter = require("./routes/user_route");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Gunakan rute dengan prefix
app.use("/api/about", aboutRouter);
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
