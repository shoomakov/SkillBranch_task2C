function isValid(word) {
  const notValid = /\d|_|\/|\\|!|@|#|\$|%|\^|&|\*|\(|\)|-/ig;
  return notValid.test(word) === false;
}

function smoothLetters(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);
  const count = arrayOfStrings.length;

  if (isValid(stringToSplit) == true) {
    if (count >= 4) {
      var out = 'Invalid fullname';
    } else if (count == 3) {
      var out = `${smoothLetters(arrayOfStrings[2])} ${arrayOfStrings[0][0].toUpperCase()}. ${arrayOfStrings[1][0].toUpperCase()}.`;
    } else if (count == 2) {
      var out = `${smoothLetters(arrayOfStrings[1])} ${arrayOfStrings[0][0].toUpperCase()}.`;
    } else if (count == 1) {
      var out = stringToSplit;
    }
    return out;
  } else {
    return 'Invalid fullname';
  }
}

module.exports = splitString;
