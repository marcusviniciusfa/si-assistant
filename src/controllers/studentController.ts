import { create } from '@models/studentModel'

async function createStudent (name: string) {
  return await create(name)
}

export default createStudent
