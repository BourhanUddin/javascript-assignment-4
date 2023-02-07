function gemsToDiamond(firstFriend , secondFriend, thirdFriend){

//error validation
    if (typeof firstFriend !== 'number' || isNaN(firstFriend) || typeof secondFriend !== 'number' || isNaN(secondFriend) || typeof thirdFriend !== 'number' || isNaN(thirdFriend)) {
        return 'Input must be a number';
      }
    let firstFrndGems = 21;
    let secondFrndGems = 32;
    let thirdFrndGems = 43;

    let totalDiamond = (firstFriend * firstFrndGems) + (secondFriend * secondFrndGems) + (thirdFriend * thirdFrndGems);

    if( totalDiamond >= 2000){
        return totalDiamond - 2000 ;
        
    }
    else {
        return totalDiamond ;
    }

}

let input1 = 1 ;
let input2 = 1 ;
let input3 = 1 ;
let finalDiamonds = gemsToDiamond(input1 , input2, input3);
console.log(finalDiamonds);