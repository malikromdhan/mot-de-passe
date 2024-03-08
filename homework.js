const button = document.getElementById("button");
button.addEventListener("click",showpassword);
function showpassword() {
    const passwordinput = document.getElementById("password");
    if(passwordinput.type === "password") {
    passwordinput.type ="text";
}else {
 passwordinput.type = "password";
}
}