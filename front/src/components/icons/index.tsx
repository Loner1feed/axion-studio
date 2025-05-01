import { ArrowIcon } from "./arrow";
import { AxionIcon } from "./axion";
import { LinkedInIcon } from "./linkedin";
import { Logo } from "./logo";
import { NestJSIcon } from "./nestjs";
import { NextJSIcon } from "./nextjs";
import { NodeJSIcon } from "./nodejs";
import { Phone } from "./phone";
import { ReactIcon } from "./react";
import { TelegramIcon } from "./telegram";
import { TypeScriptIcon } from "./typescript";
import { UpworkIcon } from "./upwork";

export * from "./logo";
export * from "./phone";
export * from "./axion";
export * from "./check";

const icons = {
  logo: <Logo />,
  phone: <Phone />,
  react: <ReactIcon />,
  nextjs: <NextJSIcon />,
  nestjs: <NestJSIcon />,
  nodejs: <NodeJSIcon />,
  typescript: <TypeScriptIcon />,
  axion: <AxionIcon />,
  arrow: <ArrowIcon />,
  upwork: <UpworkIcon />,
  linkedin: <LinkedInIcon />,
  telegram: <TelegramIcon />,
};

export default icons;
