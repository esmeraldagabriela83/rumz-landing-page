console.log("rumz1.js");

//------------------------------------------------------------------------------upper form for bouth mobile and screen
const formUpper = document.getElementById('form-section1');

console.log("formUpper is : " , formUpper);

// formUpper.style.border="3px solid pink";
/////
const emailUpper = document.getElementById('email-section1');

console.log("emailUpper is : " , emailUpper);

// emailUpper.style.border="3px dotted crimson";


formUpper.addEventListener("submit" , (event) =>{
event.preventDefault();

checkInputsUpper();

})

function checkInputsUpper(){

  //get the value from the input
const emailUpperValue = emailUpper.value.trim();
console.log("emailUpperValue is : " , emailUpperValue);

}

//------------------------------------------------------------------------down for mobile

//------------------------------------------------------------------------down for screen









//
