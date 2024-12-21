/*
getFeedback - OK
getFeedbackById - OK
getFeedbackWithParams - OK
createFeedback - OK
updateFeedback - OK
deleteFeedback - OK
*/

import db from "@db/mongo.conn";
import { FEEDBACK_COLL } from "@utils/const";
import { getAggrPipeline } from "@utils/helpers";
import {
  FeedbackResponse,
  FeedbackShort,
  FeedbackTypes,
  Params,
} from "@utils/types";
import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";

export const getFeedback = async (): Promise<FeedbackTypes[]> => {
  return db.collection<FeedbackTypes>(FEEDBACK_COLL).find({}).toArray();
};

export const getFeedbackById = async (id: string): Promise<FeedbackTypes> => {
  const query = { _id: new ObjectId(id) };

  return db.collection<FeedbackTypes>(FEEDBACK_COLL).findOne(query);
};

export const getFeedbackWithParams = async (
  params: Params
): Promise<FeedbackResponse> => {
  const { page, paramName, paramValue } = params;

  const pipeline = getAggrPipeline(params);

  const countQuery =
    paramName && paramValue !== null ? { [paramName]: paramValue } : {};

  const coll = db.collection<FeedbackTypes>(FEEDBACK_COLL);

  const processes = (await coll
    .aggregate(pipeline)
    .toArray()) as FeedbackTypes[];

  const count = await coll.countDocuments(countQuery);

  return {
    data: processes,
    page: page,
    totalCount: count,
  };
};

export const createFeedback = async (
  data: FeedbackShort
): Promise<InsertOneResult> => {
  return db.collection<FeedbackTypes>(FEEDBACK_COLL).insertOne({
    ...data,
    addInfo: "",
    contacted: false,
    dateCreated: new Date().toJSON(),
  });
};

export const updateFeedback = async (
  id: string,
  data: FeedbackTypes
): Promise<UpdateResult> => {
  const query = { _id: new ObjectId(id) };

  return await db
    .collection<FeedbackTypes>(FEEDBACK_COLL)
    .updateOne(query, { $set: data });
};

export const deleteFeedback = async (id: string): Promise<boolean> => {
  const query = { _id: new ObjectId(id) };

  const deleted = await db
    .collection<FeedbackTypes>(FEEDBACK_COLL)
    .deleteOne(query);

  return deleted.acknowledged;
};
