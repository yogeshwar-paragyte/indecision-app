class Person{
    constructor(name="Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi, I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;        
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let discription = super.getDescription();
        if (this.major){
            discription = discription + ` The major is ${this.major}`;
        }         
        return discription;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if (this.homeLocation){
            greeting += ` I am travelling from ${this.homeLocation}.`
        }
        return greeting;
    }
}
const me = new Traveler('Yogeshwar Singh', 26, 'Pune');
console.log(me.getGreeting());

const other = new Traveler('Prashant Magar', 25 );
console.log(other.getGreeting());