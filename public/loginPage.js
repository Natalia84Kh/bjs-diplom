"use strict"
const userForm1 = new UserForm();
userForm1.loginFormCallback = function (data) {

    ApiConnector.login(data, func.call(this, success) ? location.reload() : userForm1.setLoginErrorMessage(error));
    
}
