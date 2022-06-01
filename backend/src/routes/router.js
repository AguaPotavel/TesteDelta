const userController = require("../controllers/userController");
const upload = require("../storage/multer");

module.exports = (app) => {
  app.get("/api/v1/:user/photo", userController.getPhoto);
  app.post(
    "/api/v1/upload/photo",
    upload.single("image"),
    userController.postPhoto
  );

  //   app.get("/api/v1/:user/photo", (req, res, next) => {
  //     console.log(req.body);
  //     console.log(req.params.user);
  //     res.send(200);
  //   });
};
