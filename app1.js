var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//@ts-ignore
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
// console.log(sum("1","2"))
//EP-4
//Q-1
var longText = "Hello my name is Taufiq and i am a great developer";
var shortText = longText.slice(0, 10);
console.log(shortText);
//Q-2
var str1 = "Hello my name is Taufiq and i am a great developer";
var str2 = "Hello my name is Taufiq and i am a King";
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
var findMax = function (arr) {
    //array ki type ko aise define krte hain 
    arr.reduce(function (acc, curr) {
        if (curr > acc) {
            acc = curr;
        }
        return acc;
    }, 0);
};
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
console.log(findMax([1, 2]));
//note :for loop && for each loop && for of loop => used to get values of keys in array and object
//ep-12
//hw
//q-1
var fruit = ["Banana", "Apple"];
var upperCaseFruits = fruit.map(function (x) { return x.toUpperCase(); });
console.log(upperCaseFruits);
//q-3
var names = ["Ramandeep Singh player", "Venkatesh Iyer", "Rinku Singh player", "Shreyash  Iyer player", "Andre Russell player"];
var filter15Length = names.filter(function (x) { return x.length >= 15; });
console.log(filter15Length);
var comb = {
    name: "Comb",
    price: 34,
    quantity: 4
};
function totalPrice(x) {
    var total = x.price * x.quantity;
    return total;
}
console.log(totalPrice(comb));
//just like a schema aur ishme jitne feilds hain saare feild hone chaiye obj me 
var Vinod = {
    name: 'Vinod',
    Age: 32,
};
var student1 = {
    name: "Taufiq",
    age: 19,
    greet: function () { return console.log("welcome ".concat(student1.name)); }
};
student1.greet();
//ep-16
//enum
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["user"] = "user";
})(Role || (Role = {}));
var user1 = {
    email: "tauf@123.com",
    password: "xyz",
    role: Role.admin
};
var user2 = {
    email: "Aus@123.com",
    password: "xyz",
    role: Role.user
};
var func = function (user) {
    var role = user.role, email = user.email;
    return role == "admin" ? "".concat(email, " is allowed to edit the website") : "".concat(email, " is not allowed to edit the website");
};
console.log(func(user1));
console.log(func(user2));
var person1 = ["Vinod", 29, true];
var product1 = ["laptop", 32000, 5];
var product2 = ["Guitar", 3200, 10];
var displayDetails = function (product) {
    return "the ".concat(product[0], " will cost ").concat(product[1], " & there is available ").concat(product[2], " quantity");
};
console.log(displayDetails(product1));
console.log(displayDetails(product2));
//ep-18
//Union and intersection
//hw -union : basically ye func m applicable hoga input me agr diff type k input allow kre ho tb ......aur jab func diff type ki output de tab ......ishe use kr k specify kr dete hain
var func2 = function (inp) {
    if (typeof inp === "string") {
        return inp.toUpperCase();
    }
    else if (typeof inp === "number") {
        return "This is of type number";
    }
    else if (typeof inp === "boolean") {
        return inp == true ? "Yes" : "No";
    }
    else {
        return 'he he';
    }
};
console.log(func2("hello"));
console.log(func2(false));
console.log(func2(45));
var mydetails = {
    id: 21,
    name: "Taufiq",
    email: "tauf@123.com"
};
var myAccountDetails = {
    accountId: 10,
    accountType: "N/A",
    balance: 79
};
//diff bw union "|" and intersection "&" 
// const combine = (user:user,account:account):user & account=>{
// return {...user}
// }
var combine = function (user, account) {
    return __assign({}, user);
};
console.log("ep-18", combine(mydetails, myAccountDetails));
//ep-19: Generics
//hw
var add = function (a) {
    return a;
};
console.log(add("toffee"));
console.log(add(1));
