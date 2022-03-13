"use strict"
const userForm1 = new UserForm();
userForm1.loginFormCallback = function ({login, password}) {
    const data ={login, password};
    function func (data) {
        if (ApiConnector.login) {
            location.reload();
        } else {
            setLoginErrorMessage(`Пользователь с логином ${data.login}  и указанным паролем не найден`); 
        }
    }

    ApiConnector.login({login, password}, func);

    }
