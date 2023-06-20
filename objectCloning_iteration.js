// Object cloning using iterator

let rec1 = {
    length:1,
    breadth:2,
}

let rec2 = {};

for(let key in rec1){
    rec2[key] = rec1[key];
}

console.log(rec2);
rec1.length++;
console.log(rec1);
