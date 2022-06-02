const userController = require("../controllers/userController");
const upload = require("../storage/multer");

module.exports = (app) => {
  // User route //
  app.post("/api/v1/student/create", userController.createStudent);
  app.post("/api/v1/student/update/", userController.updateStudent);
  app.get("/api/v1/student/:user/photo", userController.getStudentPhoto);
  app.get("/api/v1/students", userController.getStudents);

  // User validation route //
  // app.post("/api/v1/auth", userController.authUser);

  // Upload photo / update photo route //
  app.post(
    "/api/v1/:userId/upload/photo",
    upload.single("image"),
    userController.postPhoto
  );
};
