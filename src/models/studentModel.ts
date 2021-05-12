import mongoDb from '@models/mongoDb'
import { Student } from '@interfaces'
import moment from 'moment'

class StudentModel implements Student {
  public sub: string // id
  public createdAt: string
  public name: string
  public email: string

  constructor (studentProps: Student) {
    const { sub, name, email } = studentProps
    this.sub = sub
    this.name = name
    this.email = email
    this.createdAt = moment().format()
  }

  getStudent () {
    return {
      sub: this.sub,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt
    }
  }
}

const collection = mongoDb.collection('students')

export { StudentModel, collection }
