const express = require("express");
const User = require("../backend/services/user");
const app = express();
const cors = require("cors");
// Ustawienie portu, na którym serwer będzie nasłuchiwać
const port = process.env.PORT || 3000;

const logger = require("morgan");
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// Middleware - przykład obsługi żądań JSON
app.use(express.json());
app.use(logger(formatsLogger));
app.use(cors());
app.post("/register", async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
    });
    await user.save();
    // Jeśli operacja zakończyła się sukcesem, zwróć odpowiedź
    res.status(200).json({ message: "Rejestracja zakończona sukcesem" });
  } catch (error) {
    // Obsługa błędów - zwracamy status 500 (Internal Server Error) i komunikat o błędzie
    console.error("Błąd podczas rejestracji:", error);
    res.status(500).json({ error: "Wystąpił błąd podczas rejestracji" });
  }
});

// Start serwera na określonym porcie
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});

module.exports = app;
