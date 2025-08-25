import FormHandler from "./FormHandler.js";

const newFormHandler = new FormHandler();

const form = document.getElementById("userForm");
const nameInput = document.getElementById("nameInput");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");
const output = document.getElementById("output");
const loadBtn = document.getElementById("loadBtn");

// Save data when form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = nameInput.value;
  let userPassword = passwordInput.value;
  let userEmail = emailInput.value;

  // Validate name
  if (!newFormHandler.validateName(userName)) {
    output.innerHTML = `<div class="alert alert-warning">Invalid name: must start with a letter.</div>`;
    output.style.color = "red";
    return; // stop further checks
  }

  // Validate email
  if (!newFormHandler.validateEmail(userEmail)) {
    output.textContent = "❌ Invalid email format.";
    output.style.color = "red";
    return;
  }

  // Validate form 
  if (!newFormHandler.validateForm(userEmail, userPassword, userName)) {
    output.innerHTML = `<div class="alert alert-warning">Please fill in all fields.</div>`;
    output.style.color = "red";
    return;
  }

  // Save to localStorage
  newFormHandler.saveToLocalStorage(userEmail, userPassword, userName);
 output.innerHTML = `<div class="alert alert-success">Data saved successfully!</div>`;
  output.style.color = "green";
});


   // Load data button
loadBtn.addEventListener("click", () => {
  const data = newFormHandler.getFormData();
  
  if (!data) {
    output.innerHTML = `<div class="alert alert-warning">No data found in Local Storage.</div>`;
    output.style.color = "orange";
    return;
  }

  output.innerHTML = `
    <div class="alert alert-info">
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Password: ${data.password}</p>
    </div>
  `;
  output.style.color = "blue";
});


