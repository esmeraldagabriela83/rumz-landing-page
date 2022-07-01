console.log("screen-down.js");

const formDownScreen=document.getElementById("form-section5-screen");
console.log("formDownScreen is : " , formDownScreen);

// formDownScreen.style.border="3px solid olive";

//////////////
const emailDownScreen=document.getElementById("email-section5-screen");

console.log("emailDownScreen is : " , emailDownScreen);

// emailDownScreen.style.border="3px dotted deeppink";
///////////////////////

function submitFunctionScreen(event){
    event.preventDefault();
  const emailDownScreenValue=emailDownScreen.value.trim();
  console.log("emailDownScreenValue is : " , emailDownScreenValue);
}

formDownScreen.addEventListener("submit" , submitFunctionScreen);


















////////////
