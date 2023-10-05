const Task = require('../models/task.model');
const aqp = require('api-query-params');

const createTaskService = async (data) => {
  try {
    if (data.type === 'EMPTY-TASK') {
      let result = await Task.create(data);

      return result;
    }
  } catch (error) {
    return error;
  }
};

const getAllTaskService = async (data) => {
  try {
    let result;

    const page = data.page;
    const { filter, limit } = aqp(data);
    delete filter.page;

    let offset = (page - 1) * limit;

    result = await Task.find(filter).skip(offset).limit(limit).exec();

    return result;
  } catch (error) {
    return error;
  }
};

const updateTaskService = async (data) => {
  try {
    let result = await Task.updateOne({ _id: data.id }, { ...data });

    return result;
  } catch (error) {
    return error;
  }
};
const deleteTaskService = async (data) => {
  try {
    let result = await Task.deleteById(data.id);

    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createTaskService,
  getAllTaskService,
  updateTaskService,
  deleteTaskService,
};
