// function for adding two number
function add(num1, num2){
    return num1 + num2;
}

const total = add(12, 10);
console.log(total);


//Reason for setting a default value of a number

function add(num1, num2){
    return num1 + num2;
}
const total2 = add(12);
console.log(total2); /**This will result us NAN. Because num2 id undefined. for this problem we can set a default value of num2 */


// Three way to set a default value

                    //way no.1
    function add(num1, num2){
        if(num2 == undefined){
            num2 = 1;
        }

        return num1 + num2;
    }
     const total3 = add(12);
     console.log(total3);


                //way no.2
    
    function add(num1, num2){
       num2 = num2 || 1;
        return num1 + num2;
    }
     const total4 = add(12);
     console.log(total4);


                //way no.2
    
    function add(num1, num2 = 1){
         return num1 + num2;
     }
      const total5 = add(12);
      console.log(total5);   /**This is the most easy & most used way */

            

