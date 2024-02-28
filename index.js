function checkPassword(){
  let password = document.getElementById
  ("Password").value; 
  let CnfrmPassword = document.getElementById
  ("Confirm Password").value;
  console.log(Password,CnfrmPassword);
  let message = document.getElementById("message");


if (password.length != 0){
    if(password == CnfrmPassword) {
        message.textContent = "Passwords match";
        message.style.backgroundColor = "#3ae374";
    }else{
    message.textContent = "Passwords don't match";
    message.style.backgroundColor = "#ff4d4d";
}
}

else{
    alert("Password can't be empty!");
    message.textContent = "";
}
}