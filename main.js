"use strict";

// .map()
let myArray = [1,2,3,4,5];
const mapFunc = (num) => {
    return num + 2
}
const mappedArray = myArray.map(mapFunc);
console.log(mappedArray);


// .reduce()


let foodOrders = [{ item: 'burger', price: 10},{ item: 'fries', price: 2},{item: 'milk shake', price:4 }];
const initialValue = 0;
const orderTotal = foodOrders.reduce((accumulator, currentValue) => accumulator + currentValue.price,
initialValue
)

console.log(orderTotal)


// .filter()

let climberArray = [
    {
        name: "Chad",
        climbGradeV: "2"
    },
    {
        name: "Sasha",
        climbGradeV: "5"
    },
    {
        name: "Nick",
        climbGradeV: "6"
    },
    {
        name: "Colin",
        climbGradeV: "8"
    },
]
const filterByClimbGrade = (grade) => {
    if(grade.climbGradeV >= 5){
        return true
    }
}
const notLame = climberArray.filter(filterByClimbGrade)
console.log(notLame)
