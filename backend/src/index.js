const express = require("express");
const cors = require("cors");
const { product } = require("./routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());

const PORT = 3001 | process.env.API_PORT;

app.use("/product", product);

app.get("/", (_res, res) => {
  return res.status(200).send("Developed by Summer Comunicacao");
});

app.listen(PORT, () => {
  console.log(`Application running at localhost:${PORT}`);
});
