// Username
let username = document.getElementById("username");

// Password
let password = document.getElementById("password");

let flag = 1;

function validateForm(){
    // Username
    if(username.value == ""){
        document.getElementById("user_error").innerHTML = "User Name is Empty";
        flag = 0;

    }else if(username.value.length < 3){
        document.getElementById("user_error").innerHTML = "User Name Require Minimum 3 Characters";
        flag = 0;
    }else{
        document.getElementById("user_error").innerHTML = "";
        flag = 1;

    }

    // Password
    if(password.value == ""){
        document.getElementById("pass_error").innerHTML = "Password is Empty";
        flag = 0;
    }else if(username.value.length < 3){
        document.getElementById("pass_error").innerHTML = "Pass Require Minimum 3 Characters";
        flag = 0;
    }else{
        document.getElementById("pass_error").innerHTML = "";
        flag = 1;
    }

    // Submitting The Form.
    if(flag){
        return true;
    }else{
        return false;
    }
}