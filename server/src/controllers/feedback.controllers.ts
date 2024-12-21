import {
  createFeedback,
  deleteFeedback,
  getFeedback,
  getFeedbackById,
  getFeedbackWithParams,
  updateFeedback,
} from "@models/index";
import { serverResp } from "@utils/const";
import { errorHandler } from "@utils/helpers";
import { Request, Response } from "express";

export const getFeedbackController = async (
  _: any,
  res: Response
): Promise<void> => {
  try {
    const processes = await getFeedback();
    res.status(200).json(processes);
  } catch (error) {
    errorHandler(error);
    console.log(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getFeedbackByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const process = await getFeedbackById(id);

    if (process) res.status(200).json(process);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    errorHandler(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getFeedbackWithParamsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const params = req.body;
    const response = await getFeedbackWithParams(params);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(serverResp[500]);
  }
};

export const createFeedbackController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await createFeedback(req.body);

    if (response.acknowledged) res.status(200).send(response.insertedId);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    errorHandler(error);
    console.log(error);
    res.status(500).send(serverResp[500]);
  }
};

export const updateFeedbackController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  const data = req.body;

  try {
    const response = await updateFeedback(id, data);

    if (response.acknowledged) res.status(200).send(serverResp[200]);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};

export const deleteFeedbackController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req?.params?.id;

  try {
    const isDeleted = await deleteFeedback(id);

    if (isDeleted) res.status(200).send(id);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};
