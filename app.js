//Q1=Using a loop print all odd numbers up to and including n. Don’t include 0.
//let n = parseInt(process.argv[2]);
//for(let i = 1; i<=n; i++){
  //  if(i%2!=0){
    //    console.log(i);
    //}
   
//}
//Q2=Check whether the given number is an armstrong number or not. 
let z = parseInt(process.argv)[2];

let a = z % 10;
let b = Math.floor(z / 10);
let c = b % 10;
let d = Math.floor(b / 10);
let sum = (d*d*d) + (c*c*c) + (a*a*a*);
if(sum === a){
    console.log("it is an armstrong number");
}else{
    console.log("it is an prime number");
}