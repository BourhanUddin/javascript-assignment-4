//problem-1
function mindGame(sampleInput){
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
