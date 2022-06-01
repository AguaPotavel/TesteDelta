var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now());
  },
});

const multerFilter = (req, file, cb) => {
   
  if (!file.originalname.match(/\.(jpg)$/)) { 
       // upload only png and jpg format
     return cb(new Error('Please upload a Image'))
   }

 cb(null, true)

};

var upload = multer({ 
  storage: storage,
  fileFilter: multerFilter
});

module.exports = upload;
