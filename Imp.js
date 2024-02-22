// Javascript Execution Context

/**Global EC
 * 1- Global Execution Context
 * 2- Function Execution Context
 * 3- Eval Execution Context
 */

/**[{}] =>>
 *1- Memory Creation Phase
 2- Execution Phase */




let val1 =10;
let val2 =9
function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2);
let result2 = addNum(10,5);
 /**
  * 1- Global Execution Context 
  * ---> this
  * 2- Memory Creation Phase 
  * ---> val1 --> undefined
  * ---> val2 --> undefined
  * ---> addNum --> defined
  * ---> result1 --> undefined
  * ---> result2 --> undefined 
  * 3- Excution Phase
  * ---> val1 <--10
  * ---> val2 <--5
  * ---> addNum -->#######
  * #####[{non varible enviroment+ Execution thread // Also delecte when work is finshed
  * A- Memory Phase 
  * ---> val1 --> undefined
  * ---> val2 --> undefined
  * ---> total --> undefined
  * B- Execution Context
  * ---> num1--> 10
  * ---> num2-->5
  * --->total-->15 ----> Total goes to Global Execution}]##################
  * --->result1 =15 
  * ---> result1 =
  * 
  * [{NVE + Thread
  * ---> Memory Phase
  * ---> Execution Phase}]
  */