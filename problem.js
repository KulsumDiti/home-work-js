
// Problem-1: Write a loop 1 to 200. Use break to exit the loop once you find 100.

for(let i=1; i<=200; i++){

    if(i==100){
        break;
    }
    console.log(i);
}

// Problem-3: Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.


for (let i=1; i<=40; i++) {

    if (i%2!==0) {
      continue;  
    }
    console.log(i);  
  }
  
  // Problem-5: display odd numbers from 55 to 85 and skip the numbers divisible by 5.

for (let i=55; i<=85; i++) {

    if (i%2==0 || i%5==0) {
      continue; 
    }
    console.log(i);  
  }


  // Problem-6:’’ I will invest at least 6 hrs every single day :for :next 60 days!" this message 60 times. So display this.

  for (let i=1; i<=60; i++){

    console.log("I will invest at least 6 hrs every single day: for next 60 days!");
  }

  
//   Problem-7: Find all the odd numbers from 61 to 100. And Find all the even numbers from 78 to 98.

           // Part 1: Find all odd numbers from 61 to 100

  for(i=61; i<=100; i++){

    if(i%2==0){
          continue;
    }
    console.log(i);
  }

        // Part 2: Find all even numbers from 78 to 98

for (let i=78; i<=98; i++){

  if (i%2!==0) {
    continue;
  }
  console.log(i);
}


// Problem-8: Display sum of all the odd numbers from 91 to 129.

let sum = 0;

for(i=91; i<=129; i++){

}

// Problem-9:Display sum of all the even numbers from 51 to 85.


// Problem- 10: Implement a countdown timer that counts down from 81 to 65.

for(i=81; i>=65; i--){

    console.log(i);
}

// Problem-11: Generate a multiplication table for number 9


let number = 9;

for (let i=1; i<=10; i++) {
    
  let result = number * i; 

  console.log(`${number} x ${i} = ${result}`); 
}


