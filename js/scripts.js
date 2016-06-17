// Front End Logic
$(document).ready(function()  {
  $("#submitOrder").click(function()  {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var pizzaNumber = $(".pizzaNumber").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    var customersPizzaOrder = new PizzaOrder(firstName, lastName, pizzaNumber, toppings)
    console.log(firstName);
    console.log(lastName);
    console.log(pizzaNumber);
    console.log(toppings);
    console.log(customersPizzaOrder);
    event.preventDefault();
  });
})



// Back End Logic

function PizzaOrder (customerFirst, customerLast, pizzaNumber, toppings) {
  this.firstName = customerFirst;
  this.lastName = customerLast;
  this.numberOfPizzas = pizzaNumber
  this.pizzaToppings = [toppings];
}


PizzaOrder.prototype.pizzaPrice = function () {
  //price of the pizza
}






















function  Address(street, city, state)  {
  this.street = street;
  this.city = city;
  this.state  = state;
}




PizzaOrder.prototype.fullAddress = function () {
  return this.street + ", " + this.city + ", " + this.state;
}
