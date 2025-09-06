let person={
    name:"mani",
    age:19
}
console.log(person.name)
console.log(person["age"])
const {name,age}=person;//destructing assignment
console.log(name)
console.log(age)
let fruits=["apple","banana","mango"]
console.log(fruits[0])
let numbers=[1,2,3,4,5]
let square=numbers.map((num)=>num*num);//transform each element
console.log(square)
let evens=numbers.filter((num)=>num%2==0)//filter values
console.log(evens)
let sum=numbers.reduce((present,num)=>present+num,0)
console.log(sum)
let members=[
    {
        name:"chinni",
        marks:95
    },
    {
        name:"nagamani",
        marks:90
    },
    {
        name:"chinnu",
        marks:98
    }
]
console.log(members[0])
if(members[0]>members[1 && members[0]>members[2]])
{
    console.log(members[0],"is topper with highest marks ",members[0])
}
else if(members[1]>members[0] && members[1]>members[2])
{
    console.log(members[1],"is topper with highest marks ",members[1])
}
else{
    console.log(members[2],"is topper with highest marks ",members[2])
}