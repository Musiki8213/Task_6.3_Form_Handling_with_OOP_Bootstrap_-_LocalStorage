# Task 6.3 — Form Handling with OOP, Bootstrap & LocalStorage

This project is a web form application built with JavaScript OOP, Bootstrap, and LocalStorage. Users can submit their full name, email, and password. The `FormHandler` class validates the form, provides feedback, and saves valid data to LocalStorage.

## Files
- `index.html` — Form page with Bootstrap styling  
- `FormHandler.js` — Class handling validation and LocalStorage operations  
- `app.js` — Connects the form to the `FormHandler` class and handles submit events  

## Features
- Validates name (no numbers/special characters), email format, and required fields  
- Saves valid form data to LocalStorage in JSON format  
- Displays success or error messages using Bootstrap alerts  
- Retrieves and logs stored form data  

## How to Use
1. Open `index.html` in a web browser.  
2. Fill out the form and click Submit.  
3. Check console for saved data and observe feedback messages.
