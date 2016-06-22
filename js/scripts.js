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
function PizzaOrder (customerFirst, customerLast, pizzaNumber, toppings, pizzaSize) {
  this.firstName = customerFirst;
  this.lastName = customerLast;
  this.numberOfPizzas = pizzaNumber;
  this.pizzaToppings = [toppings];
  this.pizzaSize = pizzaSize;
}
PizzaOrder.prototype.pizzaPrice = function (topping) {
  return this.numberOfPizzas * ((topping.length) * 1 + this.pizzaSize);
}
