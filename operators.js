//arithematic operators
let x=10,y=3;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)
let z=5;
z+=3;
console.log(z);
z-=3;
console.log(z)
z*=3;
console.log(z)
z/=3;
console.log(z)
z%=2;
console.log(z)
//comparision operators
let a=10,b="18";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
//logical operators
 let age=20
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<20))
// string operators
let firstname="naga"
let lastname="varada"
let fullname=firstname+" "+lastname;
console.log(fullname)
let correctname=`hello ${firstname} ${lastname}, welcome to devastra`
console.log(correctname)
//ternary operators
let myAge=19;
if(myAge>=18)
{
    console.log("eligible to vote")
}
else{
    console.log("you cannot vote")
}
let result=myAge>=18?"eligible to vote":"you cannot vote"
console.log(result)
//increament and decreament operators
let count=5;
consol.log(count++)
consol.log(count)
console.log(++count)