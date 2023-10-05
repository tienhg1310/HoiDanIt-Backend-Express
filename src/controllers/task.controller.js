const {
  createTaskService,
  getAllTaskService,
  updateTaskService,
  deleteTaskService,
} = require('../services/task.service');

module.exports = {
  postCreateTask: async (req, res) => {
    try {
      let result = await createTaskService(req.body);
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        EC: 1,
        data: error,
      });
    }
  },
  getAllTask: async (req, res) => {
    console.log('req get all');
    try {
      let result = await getAllTaskService(req.query);
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        EC: 1,
        data: error,
      });
    }
  },
  updateTask: async (req, res) => {
    try {
      let result = await updateTaskService(req.body);
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        EC: 1,
        data: error,
      });
    }
  },
  deleteTask: async (req, res) => {
    try {
      let result = await deleteTaskService(req.body);
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        EC: 1,
        data: error,
      });
    }
  },
};
