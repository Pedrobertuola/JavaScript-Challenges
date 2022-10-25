x = 123
var isPalindrome = function(x) {
    x = String(x)

const myArray = x.split("")


const otherArray = [];

for (let a=myArray.length; a>=0 ; a--) {

otherArray.push(myArray[a])
}
otherArray.shift();

if (myArray.length === otherArray.length) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] !== otherArray[i]) {
            return false;
        }
    }
    return true
} else {
    return false
}
};

/* var isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('');
}; */




