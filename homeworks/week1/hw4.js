const isPalindromes = (str) => {


  var str2 = str.split("");
  str2 = str2.reverse()
  str2 = str2.join("")
  if (str == str2) {
    return true
  } else return false


}

module.exports = isPalindromes