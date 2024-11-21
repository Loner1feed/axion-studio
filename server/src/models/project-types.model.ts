import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import db from "../db/mongo.conn";
import { PROJECT_TYPES_COLL } from "../utils/const";
import { PaginationResponse, Params } from "../utils/types";
import { getAggrPipeline } from "../utils/helpers/get-aggr-pipeline";

export interface ProjectType {
  id?: string;
  title: string;
  paragraph: string;
  iconName: string;
  showOnFront: boolean;
}

export type ProjectTypeResponse = PaginationResponse<ProjectType>;

export const getProjectTypes = async (): Promise<ProjectType[]> => {
  return await db
    .collection<ProjectType>(PROJECT_TYPES_COLL)
    .find({})
    .toArray();
};

export const getProjectTypeById = async (id: string): Promise<ProjectType> => {
  const query = { _id: new ObjectId(id) };

  return (await db
    .collection<ProjectType>(PROJECT_TYPES_COLL)
    .findOne(query)) as ProjectType;
};

export const getProjectTypesWithParams = async (
  params: Params
): Promise<ProjectTypeResponse> => {
  const { page, paramName, paramValue } = params;

  const pipeline = getAggrPipeline(params);

  const countQuery =
    paramName && paramValue !== null ? { [paramName]: paramValue } : {};

  const coll = db.collection<ProjectType>(PROJECT_TYPES_COLL);

  const projectTypes = (await coll
    .aggregate(pipeline)
    .toArray()) as ProjectType[];

  const count = await coll.countDocuments(countQuery);

  return {
    data: projectTypes,
    page: page,
    totalCount: count,
  };
};

export const createProjectType = async (
  data: ProjectType
): Promise<InsertOneResult> => {
  return db.collection<ProjectType>(PROJECT_TYPES_COLL).insertOne(data);
};

export const updateProjectType = async (
  id: string,
  data: ProjectType
): Promise<UpdateResult> => {
  const query = { _id: new ObjectId(id) };

  return await db
    .collection<ProjectType>(PROJECT_TYPES_COLL)
    .updateOne(query, { $set: data });
};

export const deleteProjectType = async (id: string): Promise<boolean> => {
  const query = { _id: new ObjectId(id) };

  const deleted = await db
    .collection<ProjectType>(PROJECT_TYPES_COLL)
    .deleteOne(query);

  return deleted.acknowledged;
};
