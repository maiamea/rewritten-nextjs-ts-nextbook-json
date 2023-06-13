const jsonServer = require('json-server');
const router = jsonServer.router('data/db.json');

const dbMiddleware = (req, res, next) => {
  router.db.read();
  req.db = router.db;
  next();
}

module.exports = dbMiddleware;
