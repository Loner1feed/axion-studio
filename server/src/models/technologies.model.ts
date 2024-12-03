/*
getTechnologies - OK
getTechnologyById - OK
getTechnologiesWithParams - OK
createTechnology - OK
updateTechnology - OK
deleteTechnology
*/

import db from "@db/mongo.conn";
import { TECHNOLOGIES_COLL } from "@utils/const";
import { getAggrPipeline } from "@utils/helpers";
import { Params, TechnologiesResponse, TechnologyTypes } from "@utils/types";
import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";

export const getTechnologies = async (): Promise<TechnologyTypes[]> => {
  return await db
    .collection<TechnologyTypes>(TECHNOLOGIES_COLL)
    .find({})
    .toArray();
};

export const getTechnologyById = async (
  id: string
): Promise<TechnologyTypes> => {
  const query = { _id: new ObjectId(id) };

  return (await db
    .collection<TechnologyTypes>(TECHNOLOGIES_COLL)
    .findOne(query)) as TechnologyTypes;
};

export const getTechnologiesWithParams = async (
  params: Params
): Promise<TechnologiesResponse> => {
  const { page, paramName, paramValue } = params;

  const pipeline = getAggrPipeline(params);

  const countQuery =
    paramName && paramValue !== null ? { [paramName]: paramValue } : {};

  const coll = db.collection<TechnologyTypes>(TECHNOLOGIES_COLL);

  const technologies = (await coll
    .aggregate(pipeline)
    .toArray()) as TechnologyTypes[];

  const count = await coll.countDocuments(countQuery);

  return {
    data: technologies,
    page: page,
    totalCount: count,
  };
};

export const createTechnology = async (
  data: TechnologyTypes
): Promise<InsertOneResult> => {
  return db.collection<TechnologyTypes>(TECHNOLOGIES_COLL).insertOne(data);
};

export const updateTechnology = async (
  id: string,
  data: TechnologyTypes
): Promise<UpdateResult> => {
  const query = { _id: new ObjectId(id) };

  return await db
    .collection<TechnologyTypes>(TECHNOLOGIES_COLL)
    .updateOne(query, { $set: data });
};

export const deleteTechnology = async (id: string): Promise<boolean> => {
  const query = { _id: new ObjectId(id) };
  return (
    await db.collection<TechnologyTypes>(TECHNOLOGIES_COLL).deleteOne(query)
  ).acknowledged;
};
