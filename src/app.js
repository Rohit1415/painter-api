import express from "express";
import painterRoutes from "./routes/painters.js";

const app = express();

app.use(express.json());
app.use("/api/painters", painterRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Painter API is running" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, _next) => {
  res
    .status(500)
    .json({ error: "Internal server error", details: err.message });
});

export default app;
