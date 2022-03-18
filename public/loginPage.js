"use strict"
const userForm1 = new UserForm();
userForm1.loginFormCallback =  (data) => {

    ApiConnector.login(data, func.call = (this, success) =>{
        if(success) {
            location.reload();
        } else {
            userForm1.setLoginErrorMessage(error);
          }
    } );
    
}

userForm1.registerFormCallback = (data) => {
    ApiConnector.register(data, func.call = (this, success) => {
        if(success){
            location.reload();
        } else {
            userForm1.setRegisterErrorMessage(error);
        }
    } );
}