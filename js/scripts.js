var pizzas = [];

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.addToppings(toppings);
}

Pizza.prototype.addToppings = function(toppings) {
  toppings.forEach(function(top){
    this.toppings.push(top);
  })
}

function Toppings(name, price){
  this.name = name;
  this.price = price;
}

Pizza.prototype.getPrice = function(){
  var price = 10;
  toppings.forEach(function(top){
    price += parseFloat(top.price);
  })
  return price;
}

function displayPizzas() {
  var pizzaList = $("ul#pizza-list");
  var htmlForPizzaInfo = "";
  for(var i=0;i<pizzas.length;i++){
    htmlForPizzaInfo += "<li id=" + i + ">" + pizza.size + " " + toppings.length + " topping pizza</li>";
  });
  pizzaList.html(htmlForContactInfo);
};

function showPizzaInfo(ind) {
  $("#pizza-details").show();
  $(".size").html(pizzas[ind].size);
  $(".toppings").html(pizzas[ind].toppings.forEach(function(top){
    top + ", ";
  }));
  $(".price").html(pizzas[ind].getPrice());
  contact.address.forEach(function(address){
    $("#ad").append("<p>" + address.type + ": " + address.address + "</p");
  });$("#buttons");
  $("#buttons");.empty();
  $("#buttons");.append("<button class='removeButton' id=" + ind + ">Remove Pizza</button>");
}

function attachPizzaListeners() {
  $("ul#pizza-list").on("click", "li", function() {
    showPizza(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    removePizza(this.id);
    $("#pizza-details").hide();
    //displayContactDetails(addressBook);
  });
};

$(document).ready(function() {
  attachPizzaListeners();
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  })
})
