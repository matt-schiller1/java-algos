function doesContain(char) {
  let punc = ["!", "?", ".", ",", ":", "-"];
  for (let i = 0; i < punc.length; i++) {
    if (char === punc[i]) {
      return char;
    }
  }
  return false;
}

function reverseWordOrder(str) {
  let newArr = [''];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (doesContain(str[i])) {
      newArr.push(str[i]);
    } else if (str[i] != " ") {
      newArr[newArr.length - 1] += str[i].toLowerCase();
    } else {
      newArr.push('');
    }
  }

  let idx = newArr.length - 1;
  while (doesContain(newArr[idx])) {
    idx--
  }

  for (let j = 0; j < idx / 2; j++) {
    let temp = newArr[j];
    newArr[j] = newArr[idx - j];
    newArr[idx - j] = temp;

  }

  for (let i = 0; i < newArr.length; i++) {
    if (doesContain(newArr[i]) || newStr === '') {
      newStr += newArr[i];
    } else {
      newStr += " " + newArr[i];
    }
  }
  return newStr.replace(newStr[0], newStr[0].toUpperCase())
}



console.log(reverseWordOrder("Life is not a drill, go for it!!!!!!!!!!!!!"));




