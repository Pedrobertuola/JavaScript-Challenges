var name = prompt("Yor name: ")
var partner =  prompt("Romantic partner")
var n = Math.random();
n = n*100;
n = Math.floor(n) +1;

if (n > 70) {
    alert("Your love score is " + n + "%" + "You love each other like kanye love kanye")
} if (n>30 && n <=70) {
    alert("Your love score is " + n + "%");
} 

if (n <=30) {
    alert("love score: "+name+" x " + partner +" "+ n +" % "+"You go together like oil and water. ")
}



