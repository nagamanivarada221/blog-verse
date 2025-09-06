let marks=85;
if(marks>=90)
{
    console.log("a+ grade")
}
else if(marks>=80)
{
console.log("a grade")
}
else if(marks>=70)
{
    console.log("b grade")
}
else{
    console.log("fail")
}
let day=5;
switch(day)
{
case 1:
    console.log("monday")   
    break
    
case 2:
    console.log("tuesday")
    break
case 3:
    console.log("wednesday")
    break    
case 4:
    console.log("thursday")
    break
case 5:
    console.log("friday")
    break
case 6:
    console.log("saturday")
    break
case 7:
    console.log("sunday")
    break
default:
    console.log("invalid")
    break
}
// for loop
let a=2,i;
for(i=1;i<=10;i++)
    console.log(a*i)
// while loop
let n=5;
let b=1;
let sum=0;
while(b<=n)
{
    sum+=b;
    b++;
}
console.log("sum:",sum)
//
let colors=["red","blue","green"]
for(let i=0;i<colors.length;i++)
{
    console.log(colors[i])
}
for(let color of colors)
{
    console.log(color)
}
let person={
    name:"mani",
    age:19,
    college:"jntuv"
}
for(let key in person)
{
    console.log(`${key}:${person[key]}`)
}
for(let i=5;i>=0;i--)
{
    if(i===3)
    {
        continue;

    }
    else if(i===2)
        {
            break
        }
    console.log(i)
}