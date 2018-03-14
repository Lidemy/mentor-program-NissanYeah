// export

const capitalize = (string) => {


  var firstword = string.charAt(0).toUpperCase()
  var restword = string.slice(1)

  return firstword + restword;
}

module.exports = capitalize