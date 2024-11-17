import express from "express";
import cors from "cors";
import router from "./routes";

const PORT = 3002;

const app = express();

app.use(cors());

app.use("/", router);

app.listen(PORT, () => console.log(`They can hear you... (port ${PORT})`));

export default app;
