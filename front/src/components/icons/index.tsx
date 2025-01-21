import { ArrowIcon } from "./arrow";
import { AxionIcon } from "./axion";
import { Logo } from "./logo";
import { NestJSIcon } from "./nestjs";
import { NextJSIcon } from "./nextjs";
import { NodeJSIcon } from "./nodejs";
import { Phone } from "./phone";
import { ReactIcon } from "./react";
import { TypeScriptIcon } from "./typescript";

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
};

export default icons;
