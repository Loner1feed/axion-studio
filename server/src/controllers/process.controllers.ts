/*
getProcessesController - OK
getProcessByIdController - OK
getProcessesWithParamsController - OK
createProcessController - OK
updateProcessController - OK
deleteProcessController - OK
*/

import {
  createProcess,
  deleteProcess,
  getProcessById,
  getProcesses,
  getProcessesWithParams,
  updateProcess,
} from "@models/index";
import { serverResp } from "@utils/const";
import { errorHandler } from "@utils/helpers";
import { Request, Response } from "express";

export const getProcessesController = async (
  _: any,
  res: Response
): Promise<void> => {
  try {
    const processes = await getProcesses();
    res.status(200).json(processes);
  } catch (error) {
    errorHandler(error);
    console.log(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getProcessByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const process = await getProcessById(id);

    if (process) res.status(200).json(process);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    errorHandler(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getProcessesWithParamsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const params = req.body;
    const response = await getProcessesWithParams(params);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(serverResp[500]);
  }
};

export const createProcessController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await createProcess(req.body);

    if (response.acknowledged) res.status(200).send(response.insertedId);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    errorHandler(error);
    console.log(error);
    res.status(500).send(serverResp[500]);
  }
};

export const updateProcessController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  const data = req.body;

  try {
    const response = await updateProcess(id, data);

    if (response.acknowledged) res.status(200).send(serverResp[200]);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};

export const deleteProcessController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req?.params?.id;

  try {
    const isDeleted = await deleteProcess(id);

    if (isDeleted) res.status(200).send(id);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};
