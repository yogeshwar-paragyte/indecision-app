// argument object - no longer bound with arrow function 

const add = (a, b) => {
    //console.log(arguments);// <= this is only supported in ES5 functions
    return a+b;
}

console.log(add(5, 6))
// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() { //<= this is ES6 function
      return this.cities.map((x) => this.name + ' has lived in ' + x);
    }
  };
  console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((x) => (x * this.multiplyBy))
    }
};
console.log(multiplier.multiply());