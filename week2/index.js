//exercise 1
const gretter=(myArray, counter)=>{
    const greetText = "Hello";
    for (let index of myArray){
        console.log(`${greetText} ${index}`);
    }
}

gretter(['Randy Savage', 'Ric flair', 'hulk hogam'],3);

//exercise 2

const capitalize=([first, ...rest]) =>
    first.toUpperCase() + rest.join('');


console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//exercise 3

const colors = ['red','green','blue'];

const map1 = colors.map(capitalize);

console.log(map1);

//exercis 4

var values = [1,60,34,30,20,5];

const result= values.filter(value=>value < 20);

console.log(result);

//exercise 5

var array = [1,2,3,4];
const reducer1 = (accumaltor, cuurentValue) => accumaltor + cuurentValue;
const reducer2 = (accumaltor,cuurentValue) => accumaltor * cuurentValue;

console.log(array.reduce(reducer1));
console.log(array.reduce(reducer2));

//exercise6 

class Car {
    constructor(model ,year){
        this.model = model;
        this.year = year;
    }
    details(){
        return `Model: ${this.model}, Engine: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model,year,balance){
        super(model,year);
        this.balance=balance;
    }

    info(){
        return `${this.model} has a balance of ${this.balance}`;

    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD' , 2018, 30000);
console.log(sedan.info());