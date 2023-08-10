class Product{

    #name ;
    #price;
    description ;


    constructor(n,p,d){

        this.#name=n;
        this.#price=p;
        this.description=d;

    }

    set name (n){
        if(typeof(n)!=='string')  {console.log("invalid type"); return ;}
       this.#name =n;

    }

    get name(){
        console.log(this.#name );

    }
    set price  (p){
       this.#price =p;

    }

    get price(){
        console.log(this.#price );
    }

   display(){
    console.log(this.#name, this.#price, this.description);

   }
}

const p =new Product("bag",100,"cool new bag");

p.name='iphone';
console.log(p.name);
p.price=4000;


console.log(p);


p.display();





