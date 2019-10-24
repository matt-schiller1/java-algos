//String to Words

function doesContain(char) {
  let punc = ["!", "?", ".", ",", ":", "-"];
  for (let i = 0; i < punc.length; i++) {
    if (char === punc[i]) {
      return char;
    }
  }
  return false;
}


function stringtoWordArray(str) {
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

  return newArr;
}




console.log(stringtoWordArray("That, works for me!"))


