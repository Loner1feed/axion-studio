/*
getAdvantages - OK
getAdvantageById - OK
getAdvantagesWithParams - OK
createAdvantage - OK
updateAdvantage - OK
deleteAdvantage - OK
*/

import db from "@db/mongo.conn";
import { ADVANTAGES_COLL } from "@utils/const";
import { getAggrPipeline } from "@utils/helpers";
import { AdvantagesResponse, AdvantageTypes, Params } from "@utils/types";
import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";

export const getAdvantages = async (): Promise<AdvantageTypes[]> => {
  return await db
    .collection<AdvantageTypes>(ADVANTAGES_COLL)
    .find({})
    .toArray();
};

export const getAdvantageById = async (id: string): Promise<AdvantageTypes> => {
  const query = { _id: new ObjectId(id) };

  return (await db
    .collection<AdvantageTypes>(ADVANTAGES_COLL)
    .findOne(query)) as AdvantageTypes;
};

export const getAdvantagesWithParams = async (
  params: Params
): Promise<AdvantagesResponse> => {
  const { page, paramName, paramValue } = params;

  const pipeline = getAggrPipeline(params);

  const countQuery =
    paramName && paramValue !== null ? { [paramName]: paramValue } : {};

  const coll = db.collection<AdvantageTypes>(ADVANTAGES_COLL);

  const processes = (await coll
    .aggregate(pipeline)
    .toArray()) as AdvantageTypes[];

  const count = await coll.countDocuments(countQuery);

  return {
    data: processes,
    page: page,
    totalCount: count,
  };
};

export const createAdvantage = async (
  data: AdvantageTypes
): Promise<InsertOneResult> => {
  return db.collection<AdvantageTypes>(ADVANTAGES_COLL).insertOne(data);
};

export const updateAdvantage = async (
  id: string,
  data: AdvantageTypes
): Promise<UpdateResult> => {
  const query = { _id: new ObjectId(id) };

  return await db
    .collection<AdvantageTypes>(ADVANTAGES_COLL)
    .updateOne(query, { $set: data });
};

export const deleteAdvantage = async (id: string): Promise<boolean> => {
  const query = { _id: new ObjectId(id) };

  const deleted = await db
    .collection<AdvantageTypes>(ADVANTAGES_COLL)
    .deleteOne(query);

  return deleted.acknowledged;
};
