const isRealString = str => {
  return typeof str === 'string' && str.trim().length > 0;
};

const isNameTaken = (arr, name) => {
  const nameList = arr.filter(user => user.name.toLowerCase() === name.toLowerCase());

  return nameList.length > 0;
};

module.exports = { isRealString, isNameTaken };
