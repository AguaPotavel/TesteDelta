// const router = require('express').Router();

// You can require and use your routes here ;)

// module.exports = router;

module.exports = (app) => {
  //   app.get("/api/v1/profile/photo", userController.getPhoto);
  //   app.post("/api/v1/upload/photo", userController.postPhoto);

  app.get("/api/v1/profile/photo", (req, res) => {
    res.send("photo");
  });
  app.post("/api/v1/upload/photo", (req, res) => {
    console.log(req);

    res.send(200);
  });
};
