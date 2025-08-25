export default class FormHandler{
    constructor(email, password, name){

        this.email = email;
        this.password = password;
        this.name = name;
    }

 //checks for the correct email format.
validateEmail(email){

   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);

}

//checks all required fields are completed.
validateForm(email, password, name){

    if(email.trim() !=="" && password.trim() !=="" && name.trim() !==""){

        console.log("Form completed");
        return true;
    }
    else{
        console.log("Form not completed");
        return false;
    }
} 

//checks that a name does not start with a number or special character.
validateName(name){

 const regex = /^[A-Za-z][A-Za-z0-9_]*$/;
 return regex.test(name);   
} 

//saves form data as JSON.
saveToLocalStorage(email, password, name){

    
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

} 

//retrieves and logs stored data.
getFormData() {

       return {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
    };

}
}