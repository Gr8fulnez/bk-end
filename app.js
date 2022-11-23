const express = require('express')
const cors = require("cors");
const app = express()

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "TALENT PLUS" });
});

const port = 8000

app.listen(port, () => {
    console.log(`App running on ${port}`)
})

