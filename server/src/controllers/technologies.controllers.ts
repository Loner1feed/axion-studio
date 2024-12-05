/*
getTechnologiesController - OK
getTechnologiesByIdController - OK
getTechnologiesWithParamsController - OK
createTechnologyController - OK
updateTechnologyController - OK
deleteTechnologyController - OK
*/

import {
  getTechnologies,
  getTechnologyById,
  getTechnologiesWithParams,
  createTechnology,
  updateTechnology,
  deleteTechnology,
} from "@models/index";
import { serverResp } from "@utils/const";
import { errorHandler } from "@utils/helpers";
import { Request, Response } from "express";

export const getTechnologiesController = async (
  _: Request,
  res: Response
): Promise<void> => {
  try {
    const technologies = await getTechnologies();
    res.status(200).json(technologies);
  } catch (error) {
    errorHandler(error);
    console.log(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getTechnologiesByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const technology = await getTechnologyById(id);

    if (technology) res.status(200).json(technology);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    errorHandler(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getTechnologiesWithParamsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const params = req.body;
    const response = await getTechnologiesWithParams(params);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(serverResp[500]);
  }
};

export const createTechnologyController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await createTechnology(req.body);

    if (response.acknowledged) res.status(200).send(response.insertedId);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    errorHandler(error);
    res.status(500).send(serverResp[500]);
  }
};

export const updateTechnologyController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  const data = req.body;

  try {
    const response = await updateTechnology(id, data);

    if (response.acknowledged) res.status(200).send(serverResp[200]);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};

export const deleteTechnologyController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req?.params?.id;

  try {
    const isDeleted = await deleteTechnology(id);

    if (isDeleted) res.status(200).send(id);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};
