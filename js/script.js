
// JavaScript for Login 

document.getElementById("login-btn").addEventListener("click", function(){
    console.log("Everything is working perfectly")

    // Getting Email Field Value
    const emailField = document.getElementById("email-field");
    const email = emailField.value;
    console.log(email);

    // Getting Password Field Value
    const passwordField = document.getElementById("password-field");
    const password = passwordField.value;
    console.log(password);

    if (email === "nirobpakhi@bank.com" && password === "12345"){
        window.location.href = "bank.html";
    }else{
        alert("Bolod Email and Password valo kore dekh thik ace kina")
    }


})