import express from "express";
import cors from "cors"; 
import rateLimit from "express-rate-limit";
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

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 30,                 
  message: {
    status: 429,
    error: "Muitas requisições. Por favor, tente novamente depois."
  },
  standardHeaders: true,   
  legacyHeaders: false,   
});

app.use("/score", limiter, scoreRoutes);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});