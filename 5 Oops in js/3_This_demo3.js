const iphone={
  name:"iphone",
  price:10000,
  rating: 4.8,
  display: ()=>{
    let iphonered={
        name : "iphonered",
        price: 10000,
        print:()=>{
            console.log(this);
        }
    }
        iphonered.print();
    }
}
iphone.display();
//{}

const iphone2={
    name:"iphone",
    price:10000,
    rating: 4.8,
    display :function(){
      let iphonered={
          name : "iphonered",
          price: 10000,
          print:()=>{
              console.log(this);
          }
      }
          iphonered.print();
      }
  }

  iphone2.display();
//{
//   name: 'iphone',
//   price: 10000,
//   rating: 4.8,
//   display: [Function: display]
// }

//use case of arrow function is to pass one liner callback func
