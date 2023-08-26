let foodarr = [
    {
      "id": 1,
      "name": "Cheeseburger",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
    },
    {
      "id": 3,
      "name": "Tacos",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
    },
    {
      "id": 4,
      "name": "Sushi",
      "price": 11.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
    },
    {
      "id": 5,
      "name": "Pasta",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
    },
    {
      "id": 6,
      "name": "Fried Chicken",
      "price": 7.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
    },
    {
      "id": 7,
      "name": "Grilled Cheese Sandwich",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
    },
    {
      "id": 8,
      "name": "Steak",
      "price": 15.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
    },
    {
      "id": 9,
      "name": "Caesar Salad",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
    },
    {
      "id": 10,
      "name": "Fish and Chips",
      "price": 8.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
    },
    {
      "id": 11,
      "name": "Ramen",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
    },
    {
      "id": 12,
      "name": "Burrito",
      "price": 7.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
    },
    {
      "id": 13,
      "name": "Pho",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
    },
    {
      "id": 14,
      "name": "Pad Thai",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
    },
    {
      "id": 15,
      "name": "Gyro",
      "price": 6.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
    },
    {
      "id": 16,
      "name": "Ice Cream",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
    },
    {
      "id": 17,
      "name": "Smoothie",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
    },
    {
      "id": "18",
      "name": "Apple Pie",
      "price": 4.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
    },
    {
      "id": 19,
      "name": "Chocolate Cake",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
    },
    {
      "id": 20,
      "name": "Pancakes",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
    },
    {
      "id": 21,
      "name": "Cupcake",
      "price": 2.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
    },
    {
      "id": 22,
      "name": "Crepes",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
    },
    {
      "id": 23,
      "name": "Club Sandwich",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
    },
    {
      "id": 24,
      "name": "Falafel",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
    },
    {
      "id": 25,
      "name": "Curry",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
    }
];
let mycards = document.getElementsByClassName("mycards")[0]; //
function getMenu(){
    foodarr.forEach((v,k) => {
        let card = document.createElement("div");
        let cardimg = document.createElement("img");
        let cardtitle = document.createElement("div");
        let cardtext = document.createElement("div");
        let cardtext1 = document.createElement("div");
        let cardtext2 = document.createElement("div");
        let cardtext3 = document.createElement("div");
        cardimg.src = v.imgSrc;
        cardtext1.innerHTML = v.name;
        cardtext2.innerHTML = "$" + v.price + "/-";
        cardtext3.innerHTML = "+";
        card.classList.add("card");
        cardtitle.classList.add("cardtitle");
        cardimg.classList.add("cardimg");
        cardtext.classList.add("cardtext");
        cardtext1.classList.add("cardtext1");
        cardtext2.classList.add("cardtext1");
        cardtext3.classList.add("plus");
        cardtext.appendChild(cardtext1);
        cardtext.appendChild(cardtext2);
        cardtitle.appendChild(cardtext);
        cardtitle.appendChild(cardtext3);
        card.appendChild(cardimg);
        card.appendChild(cardtitle);
        console.log(card);
        mycards.appendChild(card);
    })
    
}


  // Function to take an order
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Veggie Burger', 'Chicken Burger'];
        const order = {
          burgers: burgers.slice(0, 3) // Randomly choose 3 burgers
        };
        console.log('Order:', order);
        resolve(order);
      }, 2500);
    });
  }
  
  // Function to prepare the order
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = { order_status: true, paid: false };
        console.log('Order Preparation:', orderStatus);
        resolve(orderStatus);
      }, 1500);
    });
  }
  
  // Function to pay the order
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = { order_status: true, paid: true };
        console.log('Payment:', orderStatus);
        resolve(orderStatus);
      }, 1000);
    });
  }
  
  // Function to show thank you message
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Async function to handle the process
  async function restaurantProcess() {
    
    const order = await takeOrder();
    const preparationStatus = await orderPrep();
    const paymentStatus = await payOrder();
  
    if (paymentStatus.paid) {
      thankyouFnc();
    }
  }
  
  // Call the main async function to start the process
  restaurantProcess();
  