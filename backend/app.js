const express = require("express");
const User = require("../backend/services/user");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 3000;

const secretKey = "jajco";

const logger = require("morgan");
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

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
    res.status(200).json({ message: "Rejestracja zakończona sukcesem" });
  } catch (error) {
    console.error("Błąd podczas rejestracji:", error);
    res.status(500).json({ error: "Wystąpił błąd podczas rejestracji" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Nieprawidłowe dane logowania" });
    }
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });
    res.status(200).json({ token: token, username: user.firstName });
  } catch (error) {
    console.error("Błąd podczas logowania:", error);
    res.status(500).json({ error: "Wystąpił błąd podczas logowania" });
  }
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});

module.exports = app;
