/*
TODO: заменить везде "iconName" на "icon".
      В это поле мы будем записывать ссылку на иконку из Cloudinary.
*/

import "module-alias/register.js";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import router from "@routes/index";

const PORT = 3002;

const app = express();

app.use(cors());

app.use("/", router);

app.listen(PORT, () => console.log(`They can hear you... (port ${PORT})`));

export default app;
