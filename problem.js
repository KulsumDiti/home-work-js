
// Problem-1: Write a loop 1 to 200. Use break to exit the loop once you find 100.

for(let i=1; i<=200; i++){

    if(i==101){
        break;
    }
    console.log(i);
}

//Problem-2 Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

  let sum1 = 0;
  let i = 1;
  while(i<=100){
    sum1 = sum1 + i;
    if(sum1>=100){
    break;
  }
  console.log(sum1); 
  i++
 }

//  console.log(`total result : ${sum1}`); OR

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


  // Problem-6:"I will invest at least 6 hrs every single day :for :next 60 days!" this message 60 times. So display this.

  for (let i=1; i<=60; i++){

    console.log("I will invest at least 6 hrs every single day: for next 60 days!");
  }

  
//   Problem-7: Find all the odd numbers from 61 to 100. And Find all the even numbers from 78 to 98.

           // Part 1: Find all odd numbers from 61 to 100

  for(i=61; i<=100; i++){

    if(i%2!==0){

       console.log(`Odd: ${i}`);
    }
    
  }

        // Part 2: Find all even numbers from 78 to 98

for (let i=78; i<=98; i++){

  if (i%2!==0) {
    continue;
  }
  console.log(i);
}            
              OR

 for(i=78; i<=98; i++){

      if(i%2==0){
            
        console.log(`Even: ${i}`);
      }
                
    }

// Problem-8: Display sum of all the odd numbers from 91 to 129.

    let sum = 0;

    for (let i = 91; i <= 129; i++) {
        if (i % 2 !== 0) {  
                sum += i;          
           }
       }

      console.log(sum);


// Problem-9:Display sum of all the even numbers from 51 to 85.

  let sum2 = 0;

  for (let i = 51; i <= 85; i++) {

          if (i % 2 == 0) {  
              sum2 += i;          
           }
       }

        console.log(sum2);



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


