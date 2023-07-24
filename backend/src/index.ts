import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import path from "path";
import { productRouter } from "./routers/ProductRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouter";
import { orderRouter } from "./routers/orderRouter";
import { keyRouter } from "./routers/keyRouter";

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/pedidos", orderRouter);
app.use("/api/seed", seedRouter);
app.use("/api/keys", keyRouter);

app.use(express.static(path.join(__dirname, '../../frontend/dist')))
app.get('*', (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
)

 const PORT: number = parseInt((process.env.PORT || '4000') as string, 10)

app.listen(PORT, () => {
  console.log(`Servidor Iniciado em: http://localhost:${PORT}`);
});
