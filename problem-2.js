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


