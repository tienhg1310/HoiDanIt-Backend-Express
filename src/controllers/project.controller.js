const {
  createProjectService,
  getAllProjectService,
  updateProjectService,
  deleteProjectService,
} = require('../services/project.service');

module.exports = {
  postCreateProject: async (req, res) => {
    console.log('req body: ', req.body);
    try {
      let result = await createProjectService(req.body);
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
  getAllProject: async (req, res) => {
    try {
      let result = await getAllProjectService(req.query);
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
  updateProject: async (req, res) => {
    console.log(req.body);
    try {
      let result = await updateProjectService(req.body);
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
  deleteProject: async (req, res) => {
    const id = req.body.id;
    try {
      let result = await deleteProjectService(id);
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
