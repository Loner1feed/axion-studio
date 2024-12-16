/*
getAdvantagesController - OK
getAdvantageByIdController - OK
getAdvantagesWithParamsControllers - OK
createAdvantageController - OK
updateAdvantageController - OK
deleteAdvantageController - OK
*/

import {
  createAdvantage,
  deleteAdvantage,
  getAdvantageById,
  getAdvantages,
  getAdvantagesWithParams,
  updateAdvantage,
} from "@models/index";
import { serverResp } from "@utils/const";
import { errorHandler } from "@utils/helpers";
import { Request, Response } from "express";

export const getAdvantagesController = async (
  _: any,
  res: Response
): Promise<void> => {
  try {
    const processes = await getAdvantages();
    res.status(200).json(processes);
  } catch (error) {
    errorHandler(error);
    console.log(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getAdvantageByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const process = await getAdvantageById(id);

    if (process) res.status(200).json(process);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    errorHandler(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getAdvantagesWithParamsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const params = req.body;
    const response = await getAdvantagesWithParams(params);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(serverResp[500]);
  }
};

export const createAdvantageController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await createAdvantage(req.body);

    if (response.acknowledged) res.status(200).send(response.insertedId);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    errorHandler(error);
    console.log(error);
    res.status(500).send(serverResp[500]);
  }
};

export const updateAdvantageController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  const data = req.body;

  try {
    const response = await updateAdvantage(id, data);

    if (response.acknowledged) res.status(200).send(serverResp[200]);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};

export const deleteAdvantageController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req?.params?.id;

  try {
    const isDeleted = await deleteAdvantage(id);

    if (isDeleted) res.status(200).send(id);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};
