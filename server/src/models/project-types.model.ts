import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import db from "../db/mongo.conn";
import { PROJECT_TYPES_COLL } from "../utils/const";

export interface ProjectType {
  id?: string;
  title: string;
  paragraph: string;
  iconName: string;
}

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
