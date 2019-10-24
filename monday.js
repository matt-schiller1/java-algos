//String to Array

// function doesContain(char) {
//   let containsArr = ["!", "?", ".", ","];
//   for (let i = 0; i < containsArr.length; i++) {
//     if (char == containsArr[i]) {
//       return true
//     }
//   }
// }

function reverseWordOrder(str) {
  let newStr = '';
  const regex = /[:;,.!?]/;
  const swap = /[:;.!?]/;
  let newArr = [''];
  for (let i = 0; i < str.length; i++) {
    let isGood = regex.test(str[i]);
    if (str[i] == " ") {
      newArr.push("");
    } else if (isGood) {
      newArr.push("");
      newArr[newArr.length - 1] += str[i].toLowerCase();
    } else {
      newArr[newArr.length - 1] += str[i].toLowerCase();
    }
  }
  console.log(newArr);
  let first = 0;
  let last = newArr.length - 1;
  while (first <= last) {
    if (swap.test(newArr[first])) {
      first += 1;
    }
    if (swap.test(newArr[last])) {
      last -= 1;
    }

    let temp = newArr[first];
    newArr[first] = newArr[last];
    newArr[last] = temp;

    first += 1;
    last -= 1;
  }

  for (let i = 0; i < newArr.length; i++) {
    if (regex.test(newArr[i]) || newStr == '') {
      newStr += newArr[i];
    } else {
      newStr += ' ' + newArr[i];
    }
  }

  return newStr.replace(newStr[0], newStr[0].toUpperCase());
}

console.log(reverseWordOrder("Life is not a drill, go for it!!"))