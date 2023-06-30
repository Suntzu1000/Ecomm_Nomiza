import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { productRouter } from "./routers/ProductRouter";
import { seedRouter } from "./routers/seedRouter";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb:localhost/TsEcomm";
mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Conectado com mongodb");
  })
  .catch(() => {
    console.log("erro mongodb");
  });

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use("/api/products", productRouter);
app.use("/api/seed", seedRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor Iniciado em: http://localhost:${PORT}`);
});
