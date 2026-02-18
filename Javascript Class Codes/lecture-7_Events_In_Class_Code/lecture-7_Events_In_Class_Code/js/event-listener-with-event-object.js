function checkLength(e, minLength) {         
  let el = e.target;                      // Get the element that triggered the event
  let feedback = document.getElementById("feedback"); // Get feedback div

  if (el.value.length < minLength) {      
    feedback.textContent = `Username must be at least ${minLength} characters long`;  
  } else {                              
    feedback.textContent = '';   // Clear message if valid
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const elUsername = document.getElementById("username");

  if (elUsername) {
    elUsername.addEventListener("blur", function(e) {checkLength(e, 5)});  
  }
});
