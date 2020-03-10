// function doubleIt(num){
//     return num * 2;
// }
 //const result1 = doubleIt(12);
 //console.log(result1);

//const doubleIt = function(num){
    //return num * 2;
//}
//const result2 = doubleIt(10);
//console.log(result2);


        /** Topic:Arrow function made our coding easier to write a function. it is shown bellow */

// const doubleIt = num => num * 2;
// const result3 = doubleIt(15);

// const add = (num1,num2) => num1 + num2 ;
// const resultAdd = add(12, 10);
// console.log(resultAdd); 

const give6 = () =>6;
console.log(give6);


// const doMath = (x, y, z) => {
//     const add = x + y + z;
//     const diff = x - y + z;
//     const result = add / diff;
//     return result;
// }
// const result = doMath(1, 1, 1);
// console.log(result);


const totalPrice = (quantity, price) =>{
    if(quantity > 3){
        const total = quantity * price;
        return total; 
    }
    else{
        return "Sorry sir you have to buy at least 4 product.";
    }
}

const taka = totalPrice(3, 50);
console.log(taka);


 

