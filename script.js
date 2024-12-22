function ValiditeName() {
    var name = document.getElementById("name-id").value; 
    var nameErr = document.getElementById("name-err");

    if (name.length === 0) {
        nameErr.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameErr.innerHTML = "Write a valid full name";
        return false;
    }

    nameErr.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}

function ValiditePhone() {
    var phone = document.getElementById("phone-id").value;
    var phoneErr = document.getElementById("phone-err");

    if (phone.length === 0) {
        phoneErr.innerHTML = "Phone number is required";
        return false;
    }
    if (!phone.match(/^\d{10}$/)) {
        phoneErr.innerHTML = "Enter a valid 10-digit phone number";
        return false;
    }
    phoneErr.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}

function ValiditeEmail() {
    var email = document.getElementById("email-id").value; 
    var emailErr = document.getElementById("email-err");

    if (email.length === 0) {
        emailErr.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailErr.innerHTML = "Invalid email address";
        return false;
    }
    emailErr.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}

function ValiditeMessage() {
    var message = document.getElementById('message-id').value;
    var messageErr = document.getElementById('message-err');
    var required = 30; 
    var left = required - message.length;

    if (left > 0) {
        messageErr.innerHTML = left + ' more characters required';
        return false;
    }
    messageErr.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function ValiditePassword(){
    var password = document.getElementById('password-id').value;
    var passwordErr = document.getElementById("password-err");

    if (password.length === 0) {
        passwordErr.innerHTML = "Password is required";
        return false;
    }
    if (password.length < 6) {
        passwordErr.innerHTML = "Password must be at least 6 characters";
        return false;
    }
    passwordErr.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

var openeye = document.getElementById("icon-id");
var passwordInput = document.getElementById("password-id");
openeye.onclick = function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        openeye.innerHTML = '<i class="fas fa-lock-open"></i>';
    } else {
        passwordInput.type = "password";
        openeye.innerHTML = '<i class="fas fa-lock"></i>';
    }
};

function ValiditeForm() {
    var submitError = document.getElementById("submit-err");

    if (!ValiditeName() || !ValiditeEmail() || !ValiditeMessage() || !ValiditePhone() || !ValiditePassword()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the errors to submit';
        setTimeout(function() {
            submitError.style.display = 'none';
        }, 3000);    
        return false;
    }
    return true;
}
