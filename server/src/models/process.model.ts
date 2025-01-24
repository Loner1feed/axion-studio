/*
getProcesses - OK
getProcessById - OK
getProcessesWithParams - OK
createProcess - OK
updateProcess - OK
deleteProcess - OK
*/

import db from "@db/mongo.conn";
import { PROCESSES_COLL } from "@utils/const";
import { getAggrPipeline } from "@utils/helpers";
import { Params, ProcessResponse, ProcessTypes } from "@utils/types";
import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";

export const getProcesses = async (): Promise<ProcessTypes[]> => {
  return await db.collection<ProcessTypes>(PROCESSES_COLL).find({}).toArray();
};

export const getProcessById = async (id: string): Promise<ProcessTypes> => {
  const query = { _id: new ObjectId(id) };

  return (await db
    .collection<ProcessTypes>(PROCESSES_COLL)
    .findOne(query)) as ProcessTypes;
};

export const getProcessesWithParams = async (
  params: Params
): Promise<ProcessResponse> => {
  const { page, paramName, paramValue } = params;

  const pipeline = getAggrPipeline(params);

  const countQuery =
    paramName && paramValue !== null ? { [paramName]: paramValue } : {};

  const coll = db.collection<ProcessTypes>(PROCESSES_COLL);

  const processes = (await coll
    .aggregate(pipeline)
    .toArray()) as ProcessTypes[];

  const count = await coll.countDocuments(countQuery);

  return {
    data: processes,
    page: page,
    totalCount: count,
  };
};

export const createProcess = async (
  data: ProcessTypes
): Promise<InsertOneResult> => {
  return db.collection<ProcessTypes>(PROCESSES_COLL).insertOne(data);
};

export const updateProcess = async (
  id: string,
  data: ProcessTypes
): Promise<UpdateResult> => {
  const query = { _id: new ObjectId(id) };

  return await db
    .collection<ProcessTypes>(PROCESSES_COLL)
    .updateOne(query, { $set: data });
};

export const deleteProcess = async (id: string): Promise<boolean> => {
  const query = { _id: new ObjectId(id) };

  const deleted = await db
    .collection<ProcessTypes>(PROCESSES_COLL)
    .deleteOne(query);

  return deleted.acknowledged;
};
