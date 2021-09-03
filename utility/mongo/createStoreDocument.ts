import { MongoClient } from "mongodb"

export const createStoreDocument = async (client: MongoClient, document: any) => {
  const result = await client.db(process.env.MONGO_DB_DATABASE).collection(process.env.MONGO_DB_DATABASE_ROOT).insertOne(document)
  console.log(`New listing created with the following id: ${result.insertedId}`)
  return document.callAuthenticityKey
}