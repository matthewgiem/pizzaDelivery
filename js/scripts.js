// Front End Logic
$(document).ready(function()  {
  $("#submitOrder").click(function()  {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var pizzaNumber = parseInt($(".pizzaNumber").val());
    var toppings = [];
    var pizzaSize = parseInt($("input[name='size']:checked").val());
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    var customersPizzaOrder = new PizzaOrder(firstName, lastName, pizzaNumber, toppings, pizzaSize)
    $("#finalPrice").text(customersPizzaOrder.pizzaPrice(toppings));
    event.preventDefault();
  });
  event.preventDefault();
})



// Back End Logic

function  CustomerName  (customerFirst, customerLast) {
  this.firstName = customerFirst;
  this.lastName = customerLast;
}
function PizzaOrder (customerName, totalPizzas, customerAddress) {
  this.customerName = customerName;
  this.totalPizzas = [totalPizzas];
  this.customerAddress = customerAddress;
}
function PizzaType  (pizzaNumber, toppings, pizzaSize, pizzaSubPrice)
  this.numberOfPizzas = pizzaNumber;
  this.pizzaToppings = [toppings];
  this.pizzaSize = pizzaSize;
}
function  Address(street, city, state)  {
  this.street = street;
  this.city = city;
  this.state  = state;
}
PizzaType.prototype.pizzaPrice = function (topping) {
  return this.numberOfPizzas * ((topping.length) * 1 + this.pizzaSize);
}
Address.prototype.fullAddress = function () {
  return this.street + ", " + this.city + ", " + this.state;
}
CustomerName.prototype.fullName = function () {
  return  this.firstName + ", " + this.lastName;
};
