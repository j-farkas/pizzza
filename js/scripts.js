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

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  contact.address.forEach(function(address){
    $("#ad").append("<p>" + address.type + ": " + address.address + "</p");
  });
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
  buttons.append("<button class='addAddressButton' id=" +  + contact.id + ">Add Address</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
  $("#buttons").off().on("click", ".addAddressButton", function() {
    if($(".hidden").length < 1){
      $(".showing").attr('class', 'hidden');
    contact = addressBook.findContact(this.id);
    contact.addAddress($("input#addressAdd").val(), $("input#typeAdd").val())
    displayContactDetails(addressBook);
    $("input#addressAdd").val("");
    $("input#typeAdd").val("");
    console.log(contact);
    showContact(this.id);
    }else{
      $(".hidden").attr('class', 'showing');
    }
  });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
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
