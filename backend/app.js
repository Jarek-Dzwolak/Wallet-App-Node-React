const express = require("express");
const User = require("../backend/services/user");
const app = express();

// Ustawienie portu, na którym serwer będzie nasłuchiwać
const port = process.env.PORT || 3000;

// Middleware - przykład obsługi żądań JSON
app.use(express.json());

// Przykład routingu
app.get("/", (req, res) => {
  res.send("Witaj na mojej aplikacji Express!");
});

app.post("/api/register", (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    fristName: req.body.fristName,
  });

  res.status(200).json({ message: "Rejestracja zakończona sukcesem" });
});

// Start serwera na określonym porcie
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});

module.exports = app;
