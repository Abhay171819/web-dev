const a=5;
const b=2;
result=a+b;
sub=a-b;
console.log(result)
console.log(sub)

let car="volvo",
year=2025,
type=null
console.log(car,year,type)
console.log(typeof(car))
console.log(typeof(year))
console.log(typeof(type))

let c="Harry"
let v="10"
console.log(typeof(c+v))

let fruits=["mango","apple","orange"];
//console.log(fruits)
//console.log("Total fruits :",fruits.length)
//console.log(fruits.[0])
fruits.push("grapes");
console.log(fruits)

// let student={
//     name: "sejal",
//     age: "19",
//     course: "Computer science",
//     isEnrolled: true
// }
// console.log(student)
// console.log(student.name)

// let x=2;
// console.log("addition : x + 3 =",x + 3)
// console.log("subtraction : x - 3 =",x - 3)
// console.log("Multiplication : x * 3 =",x * 3)
// console.log("Poewer : x ** 3 =",x ** 3)
// console.log("incr : x ++  =", ++x)
// console.log("decr : x --  =", --x)
// console.log("Division : x / 3 =",x / 3)
// console.log("Rem : x % 3 =",x % 3)

// let y=2;
// y++
// z=y
// console.log(z)

// console.log(x>4)
// console.log(x<4)
// console.log(x<=55)
// console.log(x>=5)
// console.log(x==x)
// console.log(x===2)
// console.log(x!=5)
// console.log(3!==3)

let x=3;
console.log((x<5)&&(x>0));
console.log((x<5)&&(x>6));

console.log((x>2)||(x>5));
console.log((x>2)||(x<0));

console.log(!(x==3));
console.log(!(x<2));

let age=18;
let text="You can not drive";
if(age>=18){
    text="you can Drive"
}
console.log(text)

let hour=11;
if(hour<12){
    greeting="Goood morning";
}
else{
    greeting="good day"
}
console.log(greeting);


let marks=30
if(marks>=90){
    grade="A";
}
else if(marks>=75 && marks<90){
    grade="B";
}
else if(marks>50 && marks<75){
    grade="C";
}
else{
    grade="F";
}
console.log(grade);


let TrafficLight="Red";
let message="";
switch(TrafficLight){
    case "Red":
        message="Stop immediatily";
        break;
    case "Yellow":
        message="Prepare to stop";
        break;
    case "Green":
        message="Proced or continue driving";
        break;
    default:
        message="invalid trafficLight color";
}
console.log(message)

let day="4";
let messagee=""
switch(day){
    case "1":
        messagee="Monday";
        break;
    case "2":
        messagee="Tuesday";
        break;
    case"3":
        messagee="wednesday";
        break;
    case "4":
        messagee="Thursday"
        break;
    case "5":
        messagee="Friday";
        break;
    case "6":
        messagee="Saturday";
        break;
    case "7":
        messagee="Sunday"
        break;
}
console.log(messagee)
