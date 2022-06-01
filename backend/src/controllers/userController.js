var imgModel = require("../models/database");

exports.getPhoto = (req, res, next) => {
  console.log(req.params.user);
  imgModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      console.log(items);
      res.status(200);
    }
  });
};

exports.postPhoto = (req, res) => {
  var obj = {
    name: req.body.name,
    email: req.body.email,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/jpg",
    },
  };
  imgModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      res.redirect("/");
    }
  });
};
