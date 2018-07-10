//normal function 
const square = function(x){
//or function square(x)    
    return x * x;
}

//the arrow function
// const squareArrow = (x) =>{
//     return x * x;
// }

const squareArrow = (x) => x * x;

 console.log(squareArrow(9))

 console.log('--------------------------------------------')
 console.log('---------------Assignment-------------------')
 console.log('--------------------------------------------')

 const getFirstName = (name) => name.split(' ')[0];

 console.log(getFirstName('Yogeshwar Singh'))