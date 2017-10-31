module.exports = (req, res, next) => {
  if (!req.session.user) {
    req.session.push({
      username: "",
      cart: [],
      total: 0
    });
  }
  next();
};
