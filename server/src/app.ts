import express, { Request, Response } from "express";

const PORT = 3002;

const app = express();

app.listen(PORT, () => console.log(`They can hear you... (port ${PORT})`));

app.get("/", (req: Request, res: Response) => {
  res.send("server is alive");
});
