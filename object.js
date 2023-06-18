
//factory function

// function createRectangle(len,breadth){
//     let rectangle = {
//         length:len,
//         breadth:breadth,
    
//         draw: function(){
//             console.log("Draw the rectangle");
//         }
//     };

//     return rectangle;
    
// }
// //object creation
// let rectangleObj1 = createRectangle(5,6);

//Constructor function

function Rectangle(){
    this.length =1;
    this.breadth = 2;
    this.draw = function(){
        console.log("Shreyansh singh");
    }
}

//object creation using constructor function

let rectangleObj1 = new Rectangle();
rectangleObj1.color = "Yellow";
delete rectangleObj1.color;

