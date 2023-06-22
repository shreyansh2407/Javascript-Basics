//Emptying array
let numbers  = [1,2,3,4,5];
numbers2 = numbers;
numbers = [];//problem with this method is it does not delete by address it empty just a given array
console.log(numbers);
console.log(numbers2);

numbers.length = 0;
console.log(numbers);
console.log(numbers2);
