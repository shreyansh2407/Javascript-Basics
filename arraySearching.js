//Searching in primitives

let numbers = [1,2,4,7,8];
console.log(numbers);
console.log(numbers.indexOf(8));
console.log(numbers.includes(7));

if(numbers.indexOf(12)!= -1){
    console.log("Present");
}
else{
    console.log("Absent");
}

//Searching in non primitives

// let courses = [
//     {no:1 , naam:'shreyansh'},
//     {no:2 , naam:'singh'}
// ];

// let course = courses.find(function(course){
//     return courses.naam === 'singh';
// })
// console.log(course);