const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_SECRET;
const generateAccessToken = (userId, refreshToken) => {
  const {payload} = jwt.verify(refreshToken, secret,{complete:true});
  if (payload.id === userId) {
    const token = jwt.sign({ name: payload.name }, secret, {
      expiresIn: "10s",
    });
    return token;
  } else {
    return false;
  }
};

const generateRefreshToken = (payload) => {
  const token = jwt.sign(payload, secret);
  return token;
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
