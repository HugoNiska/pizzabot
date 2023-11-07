const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + " and " + pepperoni);

//const orderName = prompt("Enter the name of the pizza you want to order today:");

//const orderQuantity = prompt("How many of " + orderName + " do you want?");

//if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
  //const orderQuantity = prompt("How many of " + orderName + " do you want?");

  //const orderTotal = orderQuantity * pizzaPrice;

  //let cookingTime;
  //if (orderQuantity >= 1 && orderQuantity <= 2) {
    //cookingTime = 10;
  //} else if (orderQuantity >= 3 && orderQuantity <= 5) {
    //cookingTime = 15;
  //} else {
    //cookingTime = 20;
  //}

  //alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. The pizzas will take " + cookingTime + " minutes.");
//} else {
  //alert("Sorry, we don't have " + orderName + " on our menu. Please choose a pizza from the menu.");
//}

//alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + " and " + pepperoni);

//const orderName = prompt("Enter the name of the pizza you want to order today:");

//if (checkOrderName(orderName)) {
  //const orderQuantity = prompt("How many of " + orderName + " do you want?");

  //const orderTotal = totalCost(orderQuantity);

  //const time = cookingTime(orderQuantity);

  //alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. The pizzas will take " + time + " minutes.");
//} else {
  //alert("Sorry, we don't have " + orderName + " on our menu. Please choose a pizza from the menu.");
//}

function checkOrderName(orderName) {
  return (
   orderName === vegetarian || orderName === hawaiian || orderName === pepperoni
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}


function processOrder() {
        const orderName = document.getElementById("pizzaType").value;
        const orderQuantity = parseInt(document.getElementById("quantity").value);

            if (checkOrderName(orderName)) {
                const orderTotal = totalCost(orderQuantity);
                const time = cookingTime(orderQuantity);

                const response = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`;

                document.getElementById("response").textContent = response;
            } else {
                document.getElementById("response").textContent = "Sorry, we don't have that pizza on our menu. Please choose a pizza from the menu.";
            }
        }