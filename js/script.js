var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "160px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

var passField = document.getElementById("pass")
var passError = document.getElementById("error")

function validatePass() {
    var passwordValue = passField.value
    if (passwordValue.length < 6) {
        passError.innerHTML = "Password must be more than 6 characters"
        passField.style.outlineColor = "red"
    } else {
        passError.innerHTML = ""
        passField.style.outlineColor = "grey"
    }
}

function register() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var address = document.getElementById("address").value;
    var agree = document.getElementById("agree");

    if (fullname == "") {
        alert("Full name is required")
    } else if (email == "") {
        alert("Email is required")
    } else if (pass == "") {
        alert("Password is required")
    } else if (address == "") {
        alert("Address is required")
    } else if (agree.checked == false) {
        alert("You must agree to the terms and conditions!")
    } else {
        alert("Thank you! your data has been input")
    }
}