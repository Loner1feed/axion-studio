/*
getSocials - OK
getSocialById - OK
getSocialsWithParams - OK
createSocial - OK
updateSocial - OK
deleteSocial - OK
*/

import db from "@db/mongo.conn";
import { SOCIALS_COLL } from "@utils/const";
import { getAggrPipeline } from "@utils/helpers";
import { Params, SocialsResponse, SocialTypes } from "@utils/types";
import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";

export const getSocials = async (): Promise<SocialTypes[]> => {
  return await db.collection<SocialTypes>(SOCIALS_COLL).find({}).toArray();
};

export const getSocialById = async (id: string): Promise<SocialTypes> => {
  const query = { _id: new ObjectId(id) };

  return (await db
    .collection<SocialTypes>(SOCIALS_COLL)
    .findOne(query)) as SocialTypes;
};

export const getSocialsWithParams = async (
  params: Params
): Promise<SocialsResponse> => {
  const { page, paramName, paramValue } = params;

  const pipeline = getAggrPipeline(params);

  const countQuery =
    paramName && paramValue !== null ? { [paramName]: paramValue } : {};

  const coll = db.collection<SocialTypes>(SOCIALS_COLL);

  const processes = (await coll.aggregate(pipeline).toArray()) as SocialTypes[];

  const count = await coll.countDocuments(countQuery);

  return {
    data: processes,
    page: page,
    totalCount: count,
  };
};

export const createSocial = async (
  data: SocialTypes
): Promise<InsertOneResult> => {
  return db.collection<SocialTypes>(SOCIALS_COLL).insertOne(data);
};

export const updateSocial = async (
  id: string,
  data: SocialTypes
): Promise<UpdateResult> => {
  const query = { _id: new ObjectId(id) };

  return await db
    .collection<SocialTypes>(SOCIALS_COLL)
    .updateOne(query, { $set: data });
};

export const deleteSocial = async (id: string): Promise<boolean> => {
  const query = { _id: new ObjectId(id) };

  const deleted = await db
    .collection<SocialTypes>(SOCIALS_COLL)
    .deleteOne(query);

  return deleted.acknowledged;
};
