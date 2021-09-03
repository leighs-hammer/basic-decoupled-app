import {MongoClient} from 'mongodb'

export const createDBClient = () => {
  const client: MongoClient = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING)
  return client
}