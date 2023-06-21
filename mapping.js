let numbers = [1,2,3,4,5,6,7,8,9,10];
let items = numbers.map(function(value){
    return "Student_No " + value;
});
console.log(items);

//by arrow function

let item = numbers.map(value => "Student_no " + value);
console.log(item);