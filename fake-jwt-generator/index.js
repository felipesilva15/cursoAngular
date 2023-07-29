const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/sign", (req, res) => {
  const email = "felipe.allware@gmail.com.br";
  const password = "123";

  if (req.body.email === email && req.body.password === password) {
    const data = {
      nome: "Dener Troquatte",
      email,
      role: ["sysAdmin"],
    };

    const expiresIn = 3000;

    const token = jwt.sign({ data }, "SECRET", {
      expiresIn: expiresIn,
    });

    return res.json({ 
      access_token: token,
      token_type: 'bearer',
      expires_in: expiresIn
    });
  }

  res.status(500).json({ message: "Incorrect username and/or password" });
});

app.listen(port, () => {
  console.log(`Link => http://localhost:${port}`);
});
