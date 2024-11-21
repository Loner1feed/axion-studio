import { Request, Response } from "express";
import {
  createProjectType,
  deleteProjectType,
  getProjectTypeById,
  getProjectTypes,
  getProjectTypesWithParams,
  updateProjectType,
} from "../models";
import { errorHandler } from "../utils/helpers/errorHandler";
import { serverResp } from "../utils/const";

export const getProjectTypesController = async (
  _: any,
  res: Response
): Promise<void> => {
  const projectTypes = await getProjectTypes();

  try {
    res.status(200).json(projectTypes);
  } catch (error) {
    errorHandler(error);
    console.log(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getProjectTypeByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const projectType = await getProjectTypeById(id);

    if (projectType) res.status(200).json(projectType);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    errorHandler(error);
    res.status(500).send(serverResp[500]);
  }
};

export const getProjectTypesWithParamsController = async (
  req: Request,
  res: Response
) => {
  try {
    const params = req.body;
    const response = await getProjectTypesWithParams(params);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(serverResp[500]);
  }
};

export const createProjectTypeController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await createProjectType(req.body);

    if (response.acknowledged) res.status(200).send(response.insertedId);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    errorHandler(error);
    res.status(500).send(serverResp[500]);
  }
};

export const updateProjectTypeController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  console.log(id);
  const data = req.body;

  try {
    const response = await updateProjectType(id, data);

    if (response.acknowledged) res.status(200).send(serverResp[200]);
    else res.status(402).send(serverResp[402]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};

export const deleteProjectTypeController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req?.params?.id;

  try {
    const isDeleted = await deleteProjectType(id);

    if (isDeleted) res.status(200).send(id);
    else res.status(404).send(serverResp[404]);
  } catch (error) {
    res.status(500).send(serverResp[500]);
    errorHandler(error);
  }
};
