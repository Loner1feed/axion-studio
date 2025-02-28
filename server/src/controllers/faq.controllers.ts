/*
getFaqController - OK
getFaqByIdController - OK
getFaqWithParamsController - OK
createFaqController - OK
updateFaqController - OK
deleteFaqController - OK
*/

import {
  createFaq,
  getFaq,
  getFaqById,
  getFaqWithParams,
  deleteFaq,
  updateFaq,
} from "@models/index";
import { serverResp } from "@utils/const";
import { errorHandler } from "@utils/helpers";
import { Request, Response } from "express";

export const getFaqController = async (
  _: any,
  res: Response
): Promise<void> => {
  try {
    const processes = await getFaq();
    res.status(200).json(processes);
  } catch (error) {
    errorHandler(error);
    console.log(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getFaqByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const process = await getFaqById(id);

    if (process) res.status(200).json(process);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    errorHandler(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getFaqWithParamsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const params = req.body;
    const response = await getFaqWithParams(params);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(serverResp[500]);
  }
};

export const createFaqController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await createFaq(req.body);

    if (response.acknowledged) res.status(200).send(response.insertedId);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    errorHandler(error);
    console.log(error);
    res.status(500).send(serverResp[500]);
  }
};

export const updateFaqController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  const data = req.body;

  try {
    const response = await updateFaq(id, data);

    if (response.acknowledged) res.status(200).send(serverResp[200]);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};

export const deleteFaqController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req?.params?.id;

  try {
    const isDeleted = await deleteFaq(id);

    if (isDeleted) res.status(200).send(id);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};
