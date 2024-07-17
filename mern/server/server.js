import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import records from "./routes/record.js";

// const PORT = process.env.PORT || null;
const PORT = 3001;
const app = express();

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
