const TeacherController = {
  async create(req, res) {

    try {
      const body = req.body;
      await TeacherModel.create(body);
  
      res.send({
        message: "Success! New record created.",
        reqBody: body,
      });
    } catch (error) {
      res.send({
        "error": error.message
      })
    }
  },
  async readAll(req, res) {

    try {
      const students = await TeacherModel.find();
  
      res.send({
        message: "Success! 46 records found.",
        data: students,
      });
    } catch (error) {
      res.send({
        "error": error.message
      })
    }
  },
  async readOne(req, res) {

    try {
      const params = req.params;
      const teacherDetails = await TeacherModel.findById(params.id);
  
      res.send({
        message: "Success! Student details found.",
        data: teacherDetails,
      });
      
    } catch (error) {
      res.send({
        "error": error.message
      })
    }
  },
  async update(req, res) {
    try {
      const params = req.params;
      const body = req.body;
      await TeacherModel.findByIdAndUpdate(params.id, body);
  
      res.send({
        message: "Success! record has been updated.",
      });
      
    } catch (error) {
      res.send({
        "error": error.message
      })
    }
  },
  async destroy(req, res) {
    try {
      const params = req.params;
      await TeacherModel.findByIdAndDelete(params.id);
  
      res.send({
        message: "Success! record has been deleted.",
      });
      
    } catch (error) {
      res.send({
        "error": error.message
      })
    }
  }
};

module.exports = TeacherController;
