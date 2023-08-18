module.exports = function reverse (n) {
  let numberToString = n.toString();
  let i = 0;
  let result = "";
  while (i < numberToString.length) {
    result = `${numberToString[i]}${result}`;
    i++;
  }
  const resNumber = parseInt(result);
  return resNumber;
}
