import express from "express";
import cors from "cors"; 
import scoreRoutes from "./routes/scoreRoutes";

const app = express();

const allowedOrigins = [
  "https://lmangrich.github.io",
  "https://lmangrich.github.io/ts-somatoria-frontend",
  "http://localhost:3000"
];

app.use(cors({
    origin: allowedOrigins
}));

app.use(express.json());

app.use("/score", scoreRoutes);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});