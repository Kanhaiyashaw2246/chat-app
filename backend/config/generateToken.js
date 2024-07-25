const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "kanhaiya", { expiresIn: "3d" });
};

module.exports = generateToken;