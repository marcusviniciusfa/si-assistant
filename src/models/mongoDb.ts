import { MongoClient, Db } from 'mongodb'

class MongoDb {
  private client: MongoClient
  private db: Promise<Db>

  constructor (
    uri: string = process.env.DB_URI,
    dbName: string = process.env.DB_NAME) {
    this.client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    this.db = this.connect(dbName)
  }

  /**
   * Doc
   */
  private async connect (dbName: string) {
    try {
      await this.client.connect()
      return this.client.db(dbName)
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * Doc
   */
  async disconnect () {
    try {
      await this.client.close()
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * Doc
   */
  async collection (name: string, callback?: any) {
    return (await this.db).collection(name, callback)
  }

  // getClient () {
  //   return this.client
  // }
}

export default new MongoDb()
