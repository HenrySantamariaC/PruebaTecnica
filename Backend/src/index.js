import express from "express";
import { existsValues, isNumber } from "./utilities/utils.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.post("/suma", (req, res) => {
  const { sumando1, sumando2 } = req.body;

  if (existsValues(sumando1, sumando2)) {
    return res.status(400).json({
      message: "Se debe enviar necesariamente 2 valores",
    });
  }

  if (!(isNumber(sumando1) && isNumber(sumando2))) {
    return res.status(400).json({
      message: "Solo se pueden enviar numeros",
    });
  }

  let suma = sumando1 + sumando2;

  res.json({
    suma,
  });
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
