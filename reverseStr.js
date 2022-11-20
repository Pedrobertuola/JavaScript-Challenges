// Create a function that reverses a string:
// "Hi mY name is Andrei" shold be:
//'ierdnA si eman yM IH'




function reverse(str){
   //check input
   if (!str || str.length <2 || typeof str !== 'string') return str;

   const backwards = [];
   const totalItems = str.length -1;
   for (let i = totalItems; i >= 0; i--) {
      backwards.push(str[i]);
      
   }
   return backwards.join('');
}

function reverse2(str){
   return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');


reverse('Hi mY name is Andrei')
reverse2('Hi mY name is Andrei')
reverse3('Hi mY name is Andrei')
reverse4('Hi mY name is Andrei')
