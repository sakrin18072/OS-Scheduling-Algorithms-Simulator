import express from "express";
import cors from "cors";
import PreemptivePriorityRoutes from "./routes/PreemptivePriorityRoutes.js";
import PreemptiveSJFRoutes from "./routes/PreemptiveSJFRoutes.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/priority", PreemptivePriorityRoutes);
app.use("/sjf", PreemptiveSJFRoutes);

app.use("*", (request, response) => {
  response.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Server is live on port 8080");
});
