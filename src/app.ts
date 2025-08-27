import express from "express";
import cors from "cors"; 
import scoreRoutes from "./routes/scoreRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/score", scoreRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000")
})