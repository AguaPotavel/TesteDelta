var Image = require("../models/image");
var User = require("../models/user");
const path = require("path");
const fs = require("fs");

exports.getStudents = async (req, res) => {
  const students = await User.findAll();
  if (!students)
    return res.status(404).json({
      message: "Students not found",
    });

  return res.status(200).json({
    message: "Success",
    students: students,
  });
};

exports.updateStudent = async (req, res) => {
  // const { userId } = req.params;
  const { id, username, address } = req.body;

  const user = await User.findByPk(id);
  if (!user)
    return res.status(404).json({
      message: "User not found",
    });

  try {
    const update = await user.update({
      username: username,
      address: address,
    });
    return res.status(200).json({
      message: "Success",
      user: update,
    });
  } catch (err) {
    return res.status(500).json({
      message: "An error occurred",
      error: err,
    });
  }
};

exports.createStudent = async (req, res) => {
  const { username, address } = req.body;

  User.create({
    username,
    address,
  })
    .then((user) => {
      res.status(201).json({
        message: "Success",
        user: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error occurred",
        error: err,
      });
    });
};

exports.deleteStudent = async (req, res) => {
  const { userId } = req.params;

  const profileImage = await Image.findOne({
    where: {
      userId: userId,
    },
  });

  if (profileImage) {
    const pathImage = path.join(
      __dirname,
      "../static/images",
      profileImage.filename
    );

    if (fs.existsSync(pathImage)) {
      fs.unlinkSync(pathImage);
    }
  }

  const user = await User.findByPk(userId);
  if (!user)
    return res.status(404).json({
      message: "User not found",
    });

  try {
    await user.destroy();
    return res.status(200).json({
      message: "Success",
    });
  } catch (err) {
    return res.status(500).json({
      message: "An error occurred",
      error: err,
    });
  }
};

exports.getStudentPhoto = async (req, res) => {
  const { user } = req.params;
  const response = await User.findByPk(parseInt(user));

  if (!response) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  try {
    const image = await Image.findOne({
      where: {
        userId: user,
      },
    });
    if (!image)
      return res.status(404).json({
        message: "Image not found",
      });

    res.status(200).json({
      message: "Success",
      image: image.filename,
    });
  } catch (err) {
    return res.status(500).json({
      message: "An error occurred",
      error: err,
    });
  }
};

exports.postPhoto = async (req, res) => {
  const { userId } = req.params;
  const { filename, mimetype, size } = req.file;

  const hasImageOnUser = await Image.findOne({
    where: {
      userId: userId,
    },
  });

  if (hasImageOnUser) {
    console.log(
      path.join(__dirname, "../static/images", hasImageOnUser.filename)
    );
    const pathImage = path.join(
      __dirname,
      "../static/images",
      hasImageOnUser.filename
    );

    if (fs.existsSync(pathImage)) {
      fs.unlinkSync(pathImage);
    }

    try {
      const update = await hasImageOnUser.update({
        filename: filename,
        mimetype: mimetype,
        size: size,
        filepath: req.file.path,
        userId: userId,
      });
      return res.status(200).json({
        message: "Success",
        image: update,
      });
    } catch (err) {
      return res.status(500).json({
        message: "An error occurred",
        error: err,
      });
    }
  }

  const image = await Image.create({
    filename: filename,
    mimetype: mimetype,
    size: size,
    filepath: req.file.path,
    userId: userId,
  });

  if (!image)
    return res.status(500).json({
      message: "Cannot upload image",
    });

  return res.status(200).json({
    message: "Success",
    image: image,
  });
};
