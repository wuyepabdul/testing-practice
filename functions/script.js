const stringLength = (str) => {
  if (str.length >= 1 && str.length < 10) {
    return str.length;
  }
};

module.exports = { stringLength };
