import { Student } from '@interfaces'
import mongoDb from '@models/mongoDb'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

class StudentModel implements Student {
  public id: string
  public createdAt: string
  public name: string

  constructor (name: string) {
    this.id = uuidv4()
    this.createdAt = moment().format()
    this.name = name
  }

  getStudent (): Student {
    return {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt
    }
  }
}

async function create (name: string) {
  const student = new StudentModel(name)
  const test = await (await mongoDb.collection('students'))
    .insertOne(student.getStudent())
  return test
}

async function find (id: string) {
  return (await mongoDb.collection('students'))
    .findOne({ id })
}

async function findAll () {
  return (await mongoDb.collection('students'))
    .find({}).toArray()
}

async function update (id: string, update: any) {
  return (await mongoDb.collection('students'))
    .updateOne({ id }, {
      $set: {
        update
      }
    })
}

async function remove (id: string) {
  return (await mongoDb.collection('students'))
    .deleteOne({ id })
}

export { create, find, findAll, update, remove }
