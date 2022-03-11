"use strict"
const userForm1 = new UserForm();
userForm1.loginFormCallback = function () {
    
    setTimeout(()=> {
        if (ApiConnector.login) {
            location.reload();
        } else {
        setLoginErrorMessage(`Пользователь с логином ${data.login}  и указанным паролем не найден`); 
        };
    
    }, 2000);
}

