const express = require('express'); // import express
const app = express(); // bikin instance express
const port = 3000; // tentukan port server

app.get('/', (req, res) => {
  res.send('Selamat datang di Express.js!');
}); // route utama

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
}); // jalankan server
