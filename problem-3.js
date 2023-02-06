function isLGSeven(num) {
    let difference = (num - 7);
    if (difference < 7) {
      return difference;
    } else {
      return num * 2;
    }
  }
  
  console.log(isLGSeven(6));