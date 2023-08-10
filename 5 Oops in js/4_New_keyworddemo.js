class Product {
    name;
    price;
    description;

    constructor(n,p,d){
        this.name=n;
        this.price=p;
        this.description=d;

    }

    display(){

    }
}
/* 
Product() -> it is calling constructor of the class. Whenever we create an object of a class constructor is the first function that actually gets called.
# Use case of constructor?
- initialize the property of the object with some values.
- set up some connections.
Constructor is a special function. If you don't write the constructor
of yourself, JS takes the default constructor by default. In 
default constructor there is no logic.
*/
const p=new Product('bag',100,'a cool bag');
// `new` keyword will create brand new plain empty javascript object.

console.log(p);


