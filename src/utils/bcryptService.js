const bcrypt = require('bcrypt');
const saltRounds = 10;

const passwordHash = async (passw) => {
  const passHash = await bcrypt.hash(passw, saltRounds);
  return passHash;
};

const comparePassword = async (passw, hashPassw) => {
  const request = await bcrypt.compare(passw, hashPassw);
  return request;
};

module.exports = {
  passwordHash,
  comparePassword,
};