// // let a = "256";
// // let numb = Number(a);
// // console.log(numb);
// // b=parseInt(a);
// // console.log(b);

// // const myObject = {
// //   name: "Arya",
// //   age: 20,
// //   isStudent: true,
// //   hobbies: ["reading", "coding"],
// //   address: {
// //     city: "Mumbai",
// //     code: "400027"
// //   }
// // };

// // console.log(`Name: ${myObject.name}`);
// // console.log(`Favorite hobby: ${myObject.hobbies[0]}`);

// // const arrayyy = [];
// // for (let i = 1; i <= 100; i++) {
// //   arrayyy.push(i);
// // }

// // for (let i = 0; i < arrayyy.length; i++) {
// //   arrayyy[i] = arrayyy[i] * 3;
// // }
// // console.log(arrayyy);

// // for(let i=0;i<arrayyy.length;i++){
// //   if(arrayyy[i]%5==0){
// //     console.log(arrayyy[i]);
// //   }
// // }

// // let sum = 0;
// // for (let i = 0; i < arrayyy.length; i++) {
// //   sum += arrayyy[i];
// // }
// // console.log("Sum =", sum);

// let a=[...Array(100)].map((_,i)=>(i+1)*3);console.log(a.filter(x=>x%5==0)),console.log("Sum =",a.reduce((s,x)=>s+x,0)) //codegolf version of this code 


// const arrayyy = [3,4,-5,-6,7]
// let sum = 0;
// for(let i = 0; i < arrayyy.length; i++){
//     sum+=arrayyy[i];
//     if(sum>0){
//         console.log(sum);
//     }
// }

const users=[
    { name: 'Alice' , age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie',age : 28 }
];

const t = users.reduce((sum, user) => sum + user.age, 0); //reduce method:
const avg = t / users.length;

console.log(`Average age is ${avg}`);
