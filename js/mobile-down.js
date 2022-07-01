console.log("mobile-down.js");

const formDownMobile=document.getElementById("form-section5-mobile");

console.log("formDownMobile is : " , formDownMobile);

// formDownMobile.style.border="3px solid magenta";

///////////////

const emailDownMobile=document.getElementById("email-section5-mobile");

console.log("emailDownMobile is : " , emailDownMobile);
//
// emailDownMobile.style.border="3px dotted forestgreen";
///////////////////////
function submitFunction(event){
  event.preventDefault();

  checkInputsDownMobile();
}

function checkInputsDownMobile(){
  //get the value from the input
const emailDownMobileValue = emailDownMobile.value.trim();
console.log("emailDownMobileValue is : " , emailDownMobileValue);
}

formDownMobile.addEventListener("submit" , submitFunction);
///////////////
