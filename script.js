// alert("hiijihi")

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

    if (phone.length == 0) {
        phoneErr.innerHTML = "Phone no is required";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneErr.innerHTML = "Only digits please";
        return false;
    }
    if (phone.length != 10) {
        phoneErr.innerHTML = "10 digits only";
        return false;
    }
    phoneErr.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}


function ValiditeEmail() {
    var email = document.getElementById("email-id").value; 
    var emailErr = document.getElementById("email-err");

    if (email.length == 0) {
        emailErr.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailErr.innerHTML = "Invalid email";
        return false;
    }
    emailErr.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}

function ValiditeMessage() {
    var message = document.getElementById('message-id').value; // Get the message value
    var messageErr = document.getElementById('message-err');
    var required = 30; 
    var left = required - message.length;

    if (left > 0) {
        messageErr.innerHTML = left + ' more char required';
        return false;
    }
    messageErr.innerHTML = '<i class="fas fa-check-circle"></i>'; // Success icon
    return true;
}

function ValiditeForm(){
    if(!validateName() || !ValiditeEmail() || ValiditeMessage() || ValiditePhone()){
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){
            submitError.style.display='none'
        },3000);    
        return false;
    }
}
