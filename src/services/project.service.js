const Project = require('../models/project.model');
const aqp = require('api-query-params');

const createProjectService = async (data) => {
  try {
    if (data.type === 'EMPTY-PROJECT') {
      let result = await Project.create(data);
      return result;
    }
    if (data.type === 'ADD-USER') {
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.push(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      console.log({ newResult });
      return newResult;
    }
    if (data.type === 'ADD-TASK') {
      let myProjects = await Project.findById(data.projectId).exec();
      console.log(myProjects);
      for (let i = 0; i < data.tasksArr.length; i++) {
        console.log('lap lan ', i);
        myProjects.tasks.push(data.tasksArr[i]);
        console.log(myProjects);
      }

      let newResult = await myProjects.save();

      return newResult;
    }
    if (data.type === 'REMOVE-USER') {
      let myProjects = await Project.findById(data.projectId).exec();
      data.usersArr.map((user) => {
        myProjects.usersInfor.pull(user);
      });
      let newResult = await myProjects.save();
      return newResult;
    }
  } catch (error) {
    return error;
  }
};

const getAllProjectService = async (data) => {
  let result;

  const page = data.page;
  const { filter, limit, population } = aqp(data);
  delete filter.page;
  console.log(population);

  let offset = (page - 1) * limit;

  result = await Project.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();
  return result;
};

const updateProjectService = async (data) => {
  try {
    let result = await Project.updateOne({ _id: data.id }, { ...data });
    return result;
  } catch (error) {
    return error;
  }
};
const deleteProjectService = async (id) => {
  try {
    let result = await Project.deleteById(id);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createProjectService,
  getAllProjectService,
  updateProjectService,
  deleteProjectService,
};
