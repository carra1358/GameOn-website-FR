//DOM menu
let faTimes = document.getElementById("Xmenu");
let x = document.getElementById("myTopnav");
let logo = document.querySelector(".header-logo");
let faBars = document.querySelector(".fa-bars");
let widths = [0,540];

/** 
 * permet d'ajouter un style au menu de navigation
*/

// Menu 
function editNav() {
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Menu responsive
faBars.addEventListener("click",editNavMobil);

/** 
 * permet de détecter la taille de l'écran et d'afficher le menu correspondant.
*/

function editNavMobil(){

  if(window.innerWidth>= widths[0]&& window.innerWidth<widths[1] ){
    faBars.style.display= "none";
    logo.style.display = "none";
    faTimes.style.display = "block";
    
  }
  else{
    faTimes.style.display = "none";
   
  }
  editNav();
}

/** 
 * Eventlistener au click avec fonction de retour au menu fermer.
 *
*/

faTimes.addEventListener("click", closeMenu => {
  faBars.style.display= "block";
    logo.style.display = "block";
    faTimes.style.display = "none";
    x.className = "topnav";
});

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
const checkbox2 = document.getElementById("checkbox2");
let locationChecked = 0;
const emailRegx = new RegExp ("[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+.[a-z]+");
const birthRegx = new RegExp ("[0-9-]{5}[0-9-]{3}[0-9-]{2}");
const quantityRegx = new RegExp("^[0-9]{1,2}$");

//DOM message erreur et message validation

const erreurPrenom = document.getElementById("erreur-prenom");
const erreurNom = document.getElementById("erreur-nom");
const erreurMail = document.getElementById("erreur-mail");
const erreurDate = document.getElementById("erreur-date");
const erreurQuantity = document.getElementById("erreur-quantity");
const erreurLocation = document.getElementById("erreur-location");
const erreurCheckbox1 = document.getElementById("erreur-checkbox1");
const messageValidation = document.getElementById("message-validation");
const boutonSubmit = document.getElementById("submit");

// validation requirement 
form.addEventListener("submit", validate);

/** 
 * permet de valider le formulaire, envoie confirmation et réinisialise le formulaire.
 * 
 * @param event evenement à la soumisssion du formulaire
 * 
 * @return {Boolean} formulaire valide ou non.
*/
function validate (event){
event.preventDefault();

  if (prenomValid() && nomValid() && mailValid() && dateValid() && quantityValid() && locationValid() && checkbox1Valid()){
    LaunchMessage();
    clearModal();
    return true;
  } else {
    return false;
  }
  
}

/** 
 * permet de valider chaque champs du formulaire.
 * 
 * 
 * @return {Boolean} valide le champs ou envoie erreur.
*/

function prenomValid () {
    if (firstName.value.trim() == ""){
      erreurPrenom.style.display = "block";
      return false;
    } else if (firstName.value.trim().length < 2) {
      erreurPrenom.style.display = "block";
      return false;
    } else {
      erreurPrenom.style.display = "none";
      return true;
    }
}

function nomValid () {
  if (lastName.value.trim() == ""){
    erreurNom.style.display = "block";
    return false;
  } else if (lastName.value.trim().length < 2) {
    erreurNom.style.display = "block";
    return false;
  } 
  else {
    erreurNom.style.display = "none";
    return true;
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


// Message de Validation

/** 
 * Affiche le message de validation et ferme le formulaire.
*/

function LaunchMessage (){
let message = messageValidation.style.display = "block";
modalbg.style.display = "none";  
}

/** 
 * permet d'effacer toutes les entrées du formulaires.
*/

function clearModal () {
firstName.value = "";
firstName.value = "";
lastName.value = "";
email.value = "";
birthDate.value = "";
quantity.value = "";
locations[0].checked= false;
locations[1].checked= false;
locations[2].checked= false;
locations[3].checked= false;
locations[4].checked= false;
locations[5].checked= false;
checkbox2.checked = false;
}
