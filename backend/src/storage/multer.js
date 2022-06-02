var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/static/images");
  },
  filename: (req, file, cb) => {
    console.log(req);
    cb(null, file.fieldname + "_" + Date.now() + ".jpg");
  },
});

const multerFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg)$/)) {
    return cb(new Error("Please upload a Image"));
  }

  cb(null, true);
};

var upload = multer({
  storage: storage,
  // fileFilter: multerFilter,
});

module.exports = upload;
