import { MongoClient } from "mongodb"

export const listDatabases = async (client: MongoClient) => {

  const databasesList = await client.db().admin().listDatabases()

  console.log('Listing Databases:')
  // @ts-ignore
  databasesList.databases.forEach(db => console.log(` - ${db.name}`))

}