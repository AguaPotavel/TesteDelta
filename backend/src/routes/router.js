const userController = require("../controllers/userController");
const upload = require("../storage/multer");

module.exports = (app) => {

  // User route //
  app.post("/api/v1/user/create", userController.createUser);
  app.get("/api/v1/:user/photo", userController.getPhoto);

  // User validation route //
  app.post("/api/v1/auth", userController.authUser);

  // Upload photo / update photo route //
  app.post(
    "/api/v1/user/upload/photo",
    upload.single("image"),
    userController.postPhoto
  );
};
