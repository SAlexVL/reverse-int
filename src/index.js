module.exports = function reverse (n) {
  if (n>=0) {
    n = n;
  }else {
    n = Math.abs(n);
  }    
  return Number(n.toString().split('').reverse().join(''));
}
