function sumWithClosure(firstNum) {
  function addTwoNumbers(seconNum = 0) {
    return firstNum + seconNum;
  }

  return addTwoNumbers;
}

console.log(sumWithClosure(2)());
