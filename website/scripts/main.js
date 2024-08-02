
function checkemail(){
    var email = prompt("enter your email");
    if (email.length < 1) {
        alert("email cannot be blank. try again!");
    } else {
        alert("thanks! we'll date you're mom at " + email);
    }
}
checkemail();
checkforvalidemail(email);