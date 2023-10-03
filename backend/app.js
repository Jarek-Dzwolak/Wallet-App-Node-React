const express = require("express");
const app = express();

// Ustawienie portu, na którym serwer będzie nasłuchiwać
const port = process.env.PORT || 3000;

// Middleware - przykład obsługi żądań JSON
app.use(express.json());

// Przykład routingu
app.get("/", (req, res) => {
  res.send("Witaj na mojej aplikacji Express!");
});

// Start serwera na określonym porcie
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
