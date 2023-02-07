//problem-1
function mindGame(sampleInput){
    /**
     * mindGame function is used for simple mathmathics function . if input value is 5 . then at first is multiply by 3 then add 10 then divide by 2 at last substract by 5 .
     */
    let output ;
    //error validation
    if( typeof sampleInput === 'number'){

        output=(sampleInput * 3 + 10) / 2 - 5 ;
        return output ;
    }
   else{
     return "Warning ,input should be number !";
   }
}
var sampleInput = 50;
const finalOutput= mindGame(sampleInput);
console.log(finalOutput);

//problem-2

function evenOdd(inputString){
    /**
     * evenOdd function is check the input string lenght . if lenght is even return even otherwise it return odd .
     */
    //error validation
   if(typeof inputString ===  'string'){
            if(inputString.length % 2 == 0){
                return ("even") ;
              }
           else{
                 return ("odd");
               }
            }
      else { 
            return "please,provide string as a Input";
           }     
}

    let inputString="chatgpt";
    const isEvenOdd = evenOdd(inputString);
    console.log(isEvenOdd);

//problem-3

function isLGSeven(number){
    /**
     * isLGSeven function is used for finding differenc from input . if input is less then 7 , then input multiply by 2 , if is grater then 7 , return the value after substract from 7 . 
     */

    //error validation
    if(typeof number === 'number' ){

        let difference = (number - 7);
            if( difference < 7 ){
                return difference;
            }
            else {
                return number * 2 ;
            }
    }
            
    else{
           return "please,Provide a number "
        }
    
}
    let number = -15;
    const result = isLGSeven(number);
    console.log(result);


//problem-4

function findingBadData(array) {
    /**
     * findingBadData function is used for verify the inputs data is bad or good. if inputs data is less then 0 , we define as bad data otherwise is a good data .
     */
    //error validation
    if (!Array.isArray(array)) {
        console.log("Please provide an array as input.");
        return;
    }

    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            count++;
        }
    }
    return count;
}
let array = [10, -5, 8, -10, 60, -9, 55, -7, -87, 100];
const isdataIs = findingBadData(array);
console.log(isdataIs);


//problem-5 
function gemsToDiamond(firstFriend , secondFriend, thirdFriend){
    /**
     * gemsToDiamond is used for show the diamonds after multiplies  three friends gems and compare all diamonds . if totaldiamonds is grater then 2000 then is substract 2000 from totaldiamond else return totaldiamond.  
     */

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
    let finalDiamondIs = gemsToDiamond(input1 , input2, input3);
    console.log(finalDiamondIs);