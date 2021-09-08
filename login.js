const validateForm = () => {
    const email = document.forms["myForm"]["email"].value;
    if ((email.search("@gmail.com")) == -1 || email.length == 10) {
        alert("Please Enter A Valid Email");
        return false;
    }

    const password = document.forms["myForm"]["password"].value;
    const passwordRegex = /[0-9a-z]/
    if ((password.match(passwordRegex)) == null || password.length < 6) {
        alert('Please Enter An Alphanumeric Password, Consisting Of 6 Or More Characters');
        return false;
    }
}