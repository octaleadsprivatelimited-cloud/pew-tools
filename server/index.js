import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Pew Tools API is running" });
});

app.listen(PORT, () => {
  console.log(`Pew Tools server listening on port ${PORT}`);
});
