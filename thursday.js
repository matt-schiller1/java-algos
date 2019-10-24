function doesContain(char) {
  let punc = ["!", "?", ".", ",", ":", "-"];
  for (let i = 0; i < punc.length; i++) {
    if (char === punc[i]) {
      return char;
    }
  }
  return false;
}

function longestWord(str) {
  let newArr = [''];

  for (let i = 0; i < str.length; i++) {
    if (doesContain(str[i])) {
      newArr.push(str[i]);
    } else if (str[i] != " ") {
      newArr[newArr.length - 1] += str[i];
    } else {
      newArr.push('');
    }
  }

  let size = 0;
  let longestwerd = '';

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length > size) {
      size = newArr[i].length;
      longestwerd = newArr[i];
    }
  }

  return longestwerd;
}


console.log(longestWord("Snap crackle pop makes the world go round!!!!!!!!!!!!!!!!!!!!!!!!!!!"));