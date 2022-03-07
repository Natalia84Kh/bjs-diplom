"use strict"
const data = {login, password};
this.loginFormCallback = function (data) {
    ApiConnector.login(data, response);
    if(response.success) {
        location.reload();
    }
    setLoginErrorMessage(`Пользователь с логином ${data.login}  и указанным паролем не найден`);    
}


