let numbers = [1,2,-3,-5,5,0];
let filtered = numbers.filter(function(value){
    return value>=0;
});
console.log(filtered);

//by arrow function

let filter = numbers.filter(value=>  value>=0);
console.log(filter);