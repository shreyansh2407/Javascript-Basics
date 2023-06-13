// pass by value  --  prinitive are copied by their values

let b =10;
function increase(a){
    b++;
}
increase(b);
console.log(b);

//pass by reference  - - reference are copied by their address

let a ={value:10};
function increase(a){
    a.value++;
}
increase(a);
console.log(a.value);