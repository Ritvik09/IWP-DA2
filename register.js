const validateForm = () => {
    const name = document.forms["myForm"]["name"].value;
    if (name == "") {
        alert("Please Enter A Name");
        return false;
    }

    const email = document.forms["myForm"]["email"].value;
    if ((email.search("@gmail.com")) == -1 || email.length == 10) {
        alert("Please Enter A Valid Email");
        return false;
    }

    const phone = document.forms["myForm"]["phone"].value;
    const phoneRegex = /\d{10}/g;
    if ((phone.match(phoneRegex)) == null) {
        alert('Please Enter A Valid Mobile Number');
        return false;
    }

    const password = document.forms["myForm"]["password"].value;
    const passwordRegex = /[0-9a-z]/
    if ((password.match(passwordRegex)) == null || password.length < 6) {
        alert('Please Enter An Alphanumeric Password, Consisting Of 6 Or More Characters');
        return false;
    }

    const repassword = document.forms["myForm"]["repassword"].value;
    if (repassword != password) {
        alert('Passwords Do Not Match');
        return false;
    }
}