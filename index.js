//1
// function fizzBuzz(){
// first print 1 to 100
// then check if any number is multiples of 3, if yes print 'Fizz' instead
// then check if any number is multiples of 5, if yes print 'Buzz' instead
// then check if any number if multiples of 3 and 5, if yes print 'FizzBuzz' instead
//   for (let i=1; i <= 100 ; i++){
//       if ( i % 3 === 0 && i % 5 === 0){
//           console.log('FizzBuzz');
//       } else if(i % 5 === 0){
//           console.log('Buzz');
//       } else if (i % 3 === 0){
//           console.log('Fizz');
//       } else {
//           console.log(i);
//       }
//   }
// }
// fizzBuzz()
//2
let array = [];
function fizzBuzz(number){
  for (let i = 1; i <= number; i++){
      if ( i % 3 === 0 &&  i % 5 === 0){
          array.push('FizzBuzz');
      } else if (i % 3 === 0){
          array.push('Fizz');
      } else if (i % 5 === 0){
          array.push('Buzz');
      } else {
          array.push(i);
      }
  }
  return array;
}
console.log(fizzBuzz(30));

