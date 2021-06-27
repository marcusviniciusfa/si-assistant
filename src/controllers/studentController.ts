import {Student} from '../interfaces';
import {StudentModel, collection} from '../models/studentModel';

async function create(studentProps: Student) {
  const student = new StudentModel(studentProps);

  const existingStudent = await find(studentProps.sub);

  if (existingStudent) {
    const insertionStatus = await (await collection)
        .insertOne(student.getStudent());
    return insertionStatus;
  }

  return false;
}

async function find(sub: string) {
  return await (await collection)
      .findOne({sub});
}

async function findAll() {
  return await (await collection)
      .find({}).toArray();
}

async function update(sub: string, update: any) {
  return await (await collection)
      .updateOne({sub}, {
        $set: {
          update,
        },
      });
}

async function remove(sub: string) {
  return await (await collection)
      .deleteOne({sub});
}

export {create, find, findAll, update, remove};
