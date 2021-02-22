function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const closeMessage = document.getElementById("closemessage");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal form event

close.addEventListener("click", closeModal => {
  modalbg.style.display = "none";
});

closeMessage.addEventListener("click", closeM => {
  messageValidation.style.display = "none";
});

// DOM validation

const form =  document.querySelector("form"); 
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
let  locations = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");
let locationChecked = 0;
const emailRegx = new RegExp ("[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+.[a-z]+");
const birthRegx = new RegExp ("[0-9-]{5}[0-9-]{3}[0-9-]{2}");
const quantityRegx = new RegExp("[0-9]+");

//DOM message erreur et message validation

const erreurPrenom = document.getElementById("erreur-prenom");
const erreurNom = document.getElementById("erreur-nom");
const erreurMail = document.getElementById("erreur-mail");
const erreurDate = document.getElementById("erreur-date");
const erreurQuantity = document.getElementById("erreur-quantity");
const erreurLocation = document.getElementById("erreur-location");
const erreurCheckbox1 = document.getElementById("erreur-checkbox1");
const messageValidation = document.getElementById("message-validation");


// validation requirement 

function validate (){

  if (prenomValid() && nomValid() && mailValid() && dateValid() && quantityValid() && locationValid() && checkbox1Valid()){
    return true;
  } else {
    return false;
  }
  
}

function prenomValid () {
    if (!firstName.value.trim() == ""){
      erreurPrenom.style.display = "none"
      return true;
    } else if (firstName.value.trim().length >=2) {
      erreurPrenom.style.display = "none"
      return true;
    } else {
      erreurPrenom.style.display = "block"
      return false;
    }
}

function nomValid () {
  if (!lastName.value.trim() == ""){
    erreurNom.style.display = "none";
    return true;
  } else if (lastName.value.trim().length >= 2) {
    erreurNom.style.display = "none";
    return true;
  } else {
    erreurNom.style.display = "block";
    return false;
  }
}

function mailValid() {
  if (emailRegx.test(email.value)){
    erreurMail.style.display = "none";
    return true;
  } else {
    erreurMail.style.display = "block";
    return false;
  }

}

function dateValid () {
 if (birthRegx.test(birthDate.value)) {
  erreurDate.style.display = "none";
   return true;
 } else {
  erreurDate.style.display = "block";
   return false;
  }
}

function quantityValid() {
  if (quantityRegx.test(quantity.value)){
    erreurQuantity.style.display = "none";
     return true;
  }else {
    erreurQuantity.style.display = "block";
    return false;
  }
}

function locationValid () {

  for (let i =0; i < locations.length ; i++){
    if (locations[i].checked)
       locationChecked++
  }

  if (locationChecked > 0){
    erreurLocation.style.display = "none";
    return true;
  }else {
    erreurLocation.style.display = "block";
    return false;
  }

}

function checkbox1Valid () {
  if (checkbox1.checked){
    erreurCheckbox1.style.display = "none";
    return true;
  } else {
    erreurCheckbox1.style.display = "block";
    return false;
  }
}


/*
function validate () {

let formData = new FormData(form);
 
 if (firstName.value.trim() == "" || firstName.value.trim().length < 2){
  console.log(erreurPrenom.style.display = "block");
  return false;
 }
 

  if (lastName.value.trim() == "" || lastName.value.trim().length < 2){
    console.log(erreurNom.style.display = "block");
    return false;
  }

  if (email.value.trim() == "") {
    console.log(erreurMail.style.display = "block");
    return false;
  }
  if (emailRegx.test(email.value)){
    console.log(erreurMail.style.display = "block");
    return false;
  }

  if (birthRegx.test(birthDate.value)){
    console.log(erreurDate.style.display = "block");
    return false;
  }

  if (quantity.value.trim() == "" ){
    console.log(erreurQuantity.style.display = "block");
    return false;
  }


  if (!quantityRegx.test(quantity.value)){
    console.log(erreurQuantity.style.display = "block");
    return false;
  }
  
  for (let i =0; i < locations.length ; i++){
    if (locations[i].checked)
       locationChecked++
  }

  if (locationChecked < 1){
    console.log(erreurLocation.style.display = "block");
    return false;
  }

  if (!checkbox1.checked){
    console.log(erreurCheckbox1.style.display = "block");
    return false;
  }

}
*/