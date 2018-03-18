const add = (a, b) => {



  var arra = a.split('');
  var al = arra.length;

  for (let i = 0; i < arra.length; i++) arra[i] = +arra[i] | 0

  var arrb = b.split('');
  var bl = arrb.length;

  for (let i = 0; i < arrb.length; i++) arrb[i] = +arrb[i] | 0

  arra = arra.reverse()
  arrb = arrb.reverse()

  // 決定位數，讓位數少的補零


  if (al > bl) {
    for (let i = 0; i < al - bl; i++)
      arrb.push(0)
  }
  if (al < bl) {
    for (let i = 0; i < bl - al; i++)
      arra.push(0)
  }
  // 不知道為什麼不能用等於寫判斷式

  var arrc = []
  for (let i = 0; i < arra.length; i++) {
    arrc[i] = arra[i] + arrb[i]
  }

  for (let i = 0; i < arra.length - 1; i++) {
    if (arrc[i] >= 10) {
      arrc[i] = arrc[i] - 10;
      arrc[i + 1] = arrc[i + 1] + 1;
    }
  }

  arra = arra.reverse().join("");
  arrb = arrb.reverse().join("");
  arrc = arrc.reverse().join("");
  return arrc;

}

module.exports = add