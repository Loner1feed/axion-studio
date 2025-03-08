/*
getFaq - OK
getFaqById - OK
getFaqWithParams - OK
createFaq - OK
updateFaq - OK
deleteFaq - OK
*/

import db from "@db/mongo.conn";
import { FAQ_COLL } from "@utils/const";
import { getAggrPipeline } from "@utils/helpers";
import { FaqResponse, FaqTypes, Params } from "@utils/types";
import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";

export const getFaq = async (): Promise<FaqTypes[]> => {
  return await db.collection<FaqTypes>(FAQ_COLL).find({}).toArray();
};

export const getFaqById = async (id: string): Promise<FaqTypes> => {
  const query = { _id: new ObjectId(id) };

  return (await db.collection<FaqTypes>(FAQ_COLL).findOne(query)) as FaqTypes;
};

export const getFaqWithParams = async (
  params: Params
): Promise<FaqResponse> => {
  const { page, paramName, paramValue } = params;

  const pipeline = getAggrPipeline(params);

  const countQuery =
    paramName && paramValue !== null ? { [paramName]: paramValue } : {};

  const coll = db.collection<FaqTypes>(FAQ_COLL);

  const faqs = (await coll.aggregate(pipeline).toArray()) as FaqTypes[];

  const count = await coll.countDocuments(countQuery);

  return {
    data: faqs,
    page: page,
    totalCount: count,
  };
};

export const createFaq = async (data: FaqTypes): Promise<InsertOneResult> => {
  return db.collection<FaqTypes>(FAQ_COLL).insertOne(data);
};

export const updateFaq = async (
  id: string,
  data: FaqTypes
): Promise<UpdateResult> => {
  const query = { _id: new ObjectId(id) };

  return await db
    .collection<FaqTypes>(FAQ_COLL)
    .updateOne(query, { $set: data });
};

export const deleteFaq = async (id: string): Promise<boolean> => {
  const query = { _id: new ObjectId(id) };

  const deleted = await db.collection<FaqTypes>(FAQ_COLL).deleteOne(query);

  return deleted.acknowledged;
};
