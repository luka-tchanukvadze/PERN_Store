import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import productRotes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet()); // helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(morgan("dev")); // log the requests

app.use("/api/products", productRotes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
