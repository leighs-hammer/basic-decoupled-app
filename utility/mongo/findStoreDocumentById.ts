import { MongoClient } from "mongodb"

export const findOneStoreDocumentById = async (client: MongoClient, id: string) => {

  const result = await client.db(process.env.MONGO_DB_DATABASE).collection(process.env.MONGO_DB_DATABASE_ROOT).findOne({ _id: id })
  if(result) {
    console.log(`Found a listing in the collection with the name '${id}':`)
    return result
  } else {
    console.error(`No listings found with the name '${id}'`)
    return false
  }
}