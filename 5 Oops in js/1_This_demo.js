let iphone={
    name: "Iphone 13 pro",
    price: 100000,
    description : "The new apple iphone 13 pro",
    rating: 4.8,

    display(){
        console.log("first display" ,this);
    }

}

let macbook={
    name :"Air m2",
    price: 200000,
    description: "the new apple macbook",
    rating: 4.9,
    display(){
        console.log("second display", this);
    }

}
macbook.display();
// output
// second display {
//     name: 'Air m2',
//     price: 200000,
//     description: 'the new apple macbook',
//     rating: 4.9,
//     display: [Function: display]
//   }