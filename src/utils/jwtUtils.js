const jwt = require('jsonwebtoken');

// Authorization: Barer <token>
module.exports = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  let token = '';
  if (typeof bearerHeader !== 'undefined') {
    token = bearerHeader.split(' ')[1];
    req.token = token;
    const decodeToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!token || !decodeToken.payload.id) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    const { id } = decodeToken.payload;
    req.id = id;
    next();
  } else {
    res.sendStatus(403);
  }
// req.token;
}
