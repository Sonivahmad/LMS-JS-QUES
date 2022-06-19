//Q1=Using a loop print all odd numbers up to and including n. Don’t include 0.
//let n = parseInt(process.argv[2]);
//for(let i = 1; i<=n; i++){
  //  if(i%2!=0){
    //    console.log(i);
    //}
   
//}
//Q2=Check whether the given number is an armstrong number or not. 
//let z = parseInt(process.argv)[2];

//let a = z % 10;
//let b = Math.floor(z / 10);
//let c = b % 10;
//let d = Math.floor(b / 10);
//let sum = (d*d*d) + (c*c*c) + (a*a*a*);
//if(sum === a){
   // console.log("it is an armstrong number");
//}else{
   // console.log("it is an prime number");
//}



//Q3===Write a program to read the first and last digit of a number
//let a = parseInt(process.argv[2]);
//let first = a;
//while (first >= 10) {
  //  first = Math.floor(first / 10);
//}
//let last = a % 10;

//console.log("First number is : " +first + " and " + "Last number is : " + last);




//Q2===Print the sum of all even numbers in a range from a to b. (Including a,b)
//let a = parseInt(process.argv[2]);
//let b = parseInt(process.argv[3]);
//for(let i=a; i<=b; i++){
    //if(i%2==0){
    //    console.log(i);
  //  }
//}





//Q5=======Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range): 
//Condition 1 - Second last digit of number is 4
//Condition 2 - Numbers should be even 
//let a = parseInt(process.argv[2]);
//let b = parseInt(process.argv[3]);

//let multiply = 1;
//for ( let i = a; i<=b; i++){
  //  let x = Math.floor(i/10);
    //if ( i % 2 == 0 && x %10 == 4){
      //  multiply *= i;
    //}
//}
//if ( multiply == 1){
  //  console.log(0);
//}else{
  //  console.log(multiply);
//}





//Q7=====Check whether the given number is equal to its reverse number or not.


//let num = parseInt(process.argv[2]);
//let rev = 0;

//let lastDigit;

//while(num != 0){
	//lastDigit = num % 10;
  //rev = rev * 10 + lastDigit;
  //num = Math.floor(num/10);
//}

//console.log("Reverse number : "+rev);




//Q4===// Check whether the given number is an armstrong number or not. 
let a = parseInt(process.argv[2]);

let x = a % 10;
let y = Math.floor(a / 10);
let z = y % 10;
let ab = Math.floor(y / 10);
let sum = (ab*ab*ab) + (z*z*z) + (x*x*x); 
if(sum === a ){
    console.log("It is an armstrong number");
}else{
    console.log("It is a prime number");
}