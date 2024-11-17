import express, { Request, Response } from "express";
import router from "./routes";

const PORT = 3002;

const app = express();

app.listen(PORT, () => console.log(`They can hear you... (port ${PORT})`));

app.use("/", router);

export default app;
