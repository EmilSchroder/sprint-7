
// Minimum exercise
function min(num1,num2){
    if (num1<=num2){
      return num1;
    }
      return num2;
  }

// Recursion Exercise
  function isEven(param){
  	
    if(param<0){
    return '??';
  }else if(param == 0 || param == 1){
    return Boolean(param)==false;
  } return isEven(param-2);
}

  //a way to see if a negative number is evenly divisible by 2 would be to take its absolute value and use that for the calculation.

  // Bean counter

  //Original countB
  function countBs(str){
    let count = 0;
    
    for (var i=0; i<str.length; i++){
      if (str[i] == 'B'){
        count ++;
      }
    } return count;
  }

  //countChar function
  function countChar(str,letter){
    let count =0;
    for (var j=0; j<str.length; j++){
      if (str[j] == letter){
        count++;
      }
    } return count;
  }

  /// Edited countB
  function countBs(str){
	return countChar(str,'B');
}