const express = require('express');
const app = express();
const port = 8080;

// Route definition in a separate module
const usersRouter = express.Router();

// Middleware specific to this router
usersRouter.use((req, res, next) => {
  console.log('Users Router accessed at:', Date.now());
  next();
});

// Define routes for the users router
usersRouter.get('/', (req, res) => {
  res.send(`
    <h2>Users List</h2>
    <ul>
      <li><a href="/users/1">User 1</a></li>
      <li><a href="/users/2">User 2</a></li>
      <li><a href="/users/3">User 3</a></li>
    </ul>
  `);
});

usersRouter.get('/:id', (req, res) => {
  res.send(`
    <h2>User Profile</h2>
    <p>User ID: ${req.params.id}</p>
    <p><a href="/users">Back to user list</a></p>
  `);
});
// Another router for products
const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  res.send(`
    <h2>Products List</h2>
    <ul>
      <li><a href="/products/1">Product 1</a></li>
      <li><a href="/products/2">Product 2</a></li>
      <li><a href="/products/3">Product 3</a></li>
    </ul>
  `);
});

productsRouter.get('/:id', (req, res) => {
  res.send(`
    <h2>Product Details</h2>
    <p>Product ID: ${req.params.id}</p>
    <p><a href="/products">Back to product list</a></p>
  `);
});

// Root route
app.get('/', (req, res) => {
  res.send(`
    <h1>Express Separate Routes Example</h1>
    <p>Navigate to different sections:</p>
    <ul>
      <li><a href="/users">Users</a></li>
      <li><a href="/products">Products</a></li>
    </ul>
  `);
});

// Use the routers for specific URL paths
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
