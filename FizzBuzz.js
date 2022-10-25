

var fizzBuzz = function(n) {
   let Output = [];
   for(let i=1; i<= n ; i++) {
    if (i%3 ==0 && i%5 == 0) {
        Output.push("FizzBuzz");
    } else if (i%3 == 0) {
        Output.push("Fizz")
    } else if (i%5 == 0) {
        Output.push("Buzz")
    } else {
        Output.push(String(i));
    }
   }
      
   return Output;
 
}