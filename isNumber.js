//isNumber(x)
//-> x
//<- true si es n�mero
//<- false si no es n�mero

var isNumber = function (x) {
//function isNumber(x) {
  if (typeof x === 'number')
    return true;
  else
    return false;
}
