//@ts-ignore
function sum (a:number,b:number) {
return a + b;
}
console.log(sum(1,2))
// console.log(sum("1","2"))

//EP-4
//Q-1
const longText:string =  "Hello my name is Taufiq and i am a great developer";
const shortText:string = longText.slice(0,10)
console.log(shortText)

//Q-2
const str1 = "Hello my name is Taufiq and i am a great developer";
const str2 = "Hello my name is Taufiq and i am a King";
// let areEqual ;
// str1 === str2 ? areEqual = true : areEqual = false

//Q-3
// const product:string = "sunglasses"
// const price:number = 45;
// const detail = `The product ${product} is priced at $${price} dollars`
// console.log(detail)

//Ep-5
//q-1

// function isDivisibleby4and8 (x:number):boolean{
// return (x%4==0 && x%8==0)
// }
// console.log(isDivisibleby4and8(16))

//bigInt
// const maxInt =  9007199254740991n
// console.log(maxInt)

//ep-6
//test
// let val:any = 3;
//any laga ne se ts bilkul js ki trah behave krega
// val = "hello"

// if(typeof val == "number"){
//     console.log("number")
// }
// else if(typeof val == "string"){
//     console.log('string')
// }

//ep-7
//hw
//q-2
// function calculateArea (a:number,b:number,c:number){
//     const val:number = a*b*c
// return val
// }
// console.log(calculateArea(3,5,6))

//ep-8
//hw
//q-1
// const calAvg = (arr:any):number =>{
// const sum = arr.reduce((acc:number, curr:number)=> acc + curr)
// return sum / arr.length
// }

// console.log(calAvg([1,2,3,4,5,6]))


//q-2
// const val2 = 0;
const findMax = (arr: number[]) => {
    //array ki type ko aise define krte hain 
  arr.reduce((acc:number, curr:number)=>{
    if( curr > acc ) {acc = curr}
    return acc;
  }, 0 )
}
//note:
// const arr: number[] = [2,4,5,6] //we store array like this && try to store same type of data in an array
// const obj:{} = {} //we store obj like this && try to store same type of data in an obj

//types of defining array
//type 1
// const arr: number[] = [2,4,5,6] //we store array like this && try to store same type of data in an array
//type 2
// const number:number[] = new Array (1,2,3,4,5)
//type 3 
// const names: string[] = Array.of("vinod","taufee")
console.log(findMax([1,2]))


//note :for loop && for each loop && for of loop => used to get values of keys in array and object

//ep-12
//hw
//q-1
const fruit:string[] = ["Banana", "Apple"]
const upperCaseFruits:string[] = fruit.map((x:string)=>x.toUpperCase())
console.log(upperCaseFruits)

//q-3
const names = ["Ramandeep Singh player", "Venkatesh Iyer", "Rinku Singh player", "Shreyash  Iyer player", "Andre Russell player"]
const filter15Length = names.filter((x)=>x.length >= 15)
console.log(filter15Length)


//ep-13
//hw
//q-1
type Product ={
  name: string;
  price: number;
  quantity: number;
}
const comb:Product = {
  name:"Comb",
  price:34,
  quantity: 4
}
function totalPrice(x:Product):number{
  const total:number = x.price * x.quantity
  return total
}
console.log(totalPrice(comb))

//ep-14
//Alice
//it is building schema for objects
type Employ = {
name:string;
Age:number;
Skill?:string //optinal
}
//just like a schema aur ishme jitne feilds hain saare feild hone chaiye obj me 

const Vinod:Employ = {
  name:'Vinod',
  Age:32,
}

//ep-15
//call signature
type Student ={
  name:string;
  age:number;
  gender?:string;
  greet:()=>void//call signature
}

const student1 = {
  name:"Taufiq",
  age:19,
  greet:()=>console.log(`welcome ${student1.name}`)
}

student1.greet()

//ep-16
//enum
enum Role {
  admin = "admin",
  user = "user"
} 

type Schema = {
  name?:string;
  email:string;
  password:string;
  role: Role
}

const user1:Schema = {
  email:"tauf@123.com",
  password:"xyz",
  role: Role.admin
}
const user2:Schema = {
  email:"Aus@123.com",
  password:"xyz",
  role: Role.user
}

const func = (user:Schema):string=>{
  const {role,email} = user
  return role == "admin" ? `${email} is allowed to edit the website`: `${email} is not allowed to edit the website`
}

console.log(func(user1));
console.log(func(user2));

//ep-17
//Tuples
//note: tuples used for creating arrays basically if you r sure about type and no. of items.

type Person =[string,number,boolean]//its like schema for array(strict) 

const person1:Person = ["Vinod",29,true]

//hw
//q-1
type ProductInfo = [string,number,number]

const product1:ProductInfo = ["laptop", 32000 , 5]
const product2:ProductInfo = ["Guitar", 3200 , 10]

const displayDetails = (product:ProductInfo)=> {
  return `the ${product[0]} will cost ${product[1]} & there is available ${product[2]} quantity`
}

console.log(displayDetails(product1))
console.log(displayDetails(product2))

//ep-18
//Union and intersection
//hw -union : basically ye func m applicable hoga input me agr diff type k input allow kre ho tb ......aur jab func diff type ki output de tab ......ishe use kr k specify kr dete hain

const func2 = ( inp:string | number | boolean ):string=>{
if(typeof inp === "string" ){
  return inp.toUpperCase()
} else if(typeof inp === "number"){
return `This is of type number`
} else if (typeof inp === "boolean" ){
 return inp == true ? "Yes" : "No" 
} else{return 'he he'}
}

console.log(func2("hello"))
console.log(func2(false))
console.log(func2(45))

// hw
type user = {
  id:number;
  name:string;
  email:string;
}

type account = {
  accountId:number;
  accountType:string;
  balance:number;
}

const mydetails:user = {
  id:21,
  name:"Taufiq",
  email:"tauf@123.com"
}

const myAccountDetails:account = {
  accountId:10,
accountType:"N/A",
balance:79
}


//diff bw union "|" and intersection "&" 

// const combine = (user:user,account:account):user & account=>{
// return {...user}
// }

const combine = (user:user,account:account):user | account=>{
return {...user}
}
 
console.log("ep-18",combine(mydetails,myAccountDetails))

//ep-19: Generics : no need to use | and & 
//hw
const add = <T>(a:T ):T =>{
return a
}

console.log(add("toffee"));
console.log(add(1));