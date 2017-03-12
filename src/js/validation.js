"use strict";

(function() {

    var form = document.querySelector("#form");





    /* РАБОТАЕМ С ПОЛЕМ "ИМЯ" */

    var nameField = document.querySelector("#name");
    var nameHelp = document.querySelector("#name-help");

    function validateName(name) {

        var re = /^[А-я]+$/;

        if (name !== "" && re.test(name) === false) {
            nameField.parentElement.classList.add("has-error");
            nameField.classList.add("form-control-error");
            nameHelp.classList.remove("hidden");
        } else {
            nameField.parentElement.classList.remove("has-error");
            nameField.classList.remove("form-control-error");
            nameHelp.classList.add("hidden");
        }

    }

    nameField.addEventListener("input", function (event) {
        validateName(nameField.value);
    });





    /* РАБОТАЕМ С ПОЛЕМ "ФАМИЛИЯ" */

    var surnameField = document.querySelector("#surname");
    var surnameHelp = document.querySelector("#surname-help");

    function validateSurname(surname) {

        var re = /^[А-я]+$/;

        if (surname !== "" && re.test(surname) === false) {
            surnameField.parentElement.classList.add("has-error");
            surnameField.classList.add("form-control-error");
            surnameHelp.classList.remove("hidden");
        } else {
            surnameField.parentElement.classList.remove("has-error");
            surnameField.classList.remove("form-control-error");
            surnameHelp.classList.add("hidden");
        }

    }

    surnameField.addEventListener("input", function (event) {
        validateSurname(surnameField.value);
    });





    /* РАБОТАЕМ С ПОЛЕМ "ВОЗРАСТ" */

    var ageField = document.querySelector("#age");
    var ageHelp = document.querySelector("#age-help");

    function validateAge(age) {

        if (!(parseInt(age) > 0 && parseInt(age) < 100) && age !== "") {
            ageField.parentElement.classList.add("has-error");
            ageField.classList.add("form-control-error");
            ageHelp.classList.remove("hidden");
        } else {
            ageField.parentElement.classList.remove("has-error");
            ageField.classList.remove("form-control-error");
            ageHelp.classList.add("hidden");
        }

    }

    ageField.addEventListener("input", function (event) {
        validateAge(ageField.value);
    });





    /* РАБОТАЕМ С ПОЛЕМ "О СЕБЕ" */

    var aboutField = document.querySelector("#about");
    var aboutHelp = document.querySelector("#about-help");

    function countWords(s) {
        s = s.replace(/(^\s*)|(\s*$)/gi, "");
        s = s.replace(/[ ]{2,}/gi, " ");
        s = s.replace(/\n /, "\n");
        return s.split(' ').length;
    }

    function validateAbout(about) {

        if (about !== "" && countWords(about) <= 20) {
            aboutField.parentElement.classList.add("has-error");
            aboutField.classList.add("form-control-error");
            aboutHelp.classList.remove("hidden");
        } else {
            aboutField.parentElement.classList.remove("has-error");
            aboutField.classList.remove("form-control-error");
            aboutHelp.classList.add("hidden");
        }

    }

    aboutField.addEventListener("blur", function (event) {
        validateAbout(aboutField.value);
    });

    /* это обработчик необходим для того, чтобы убрать
    *  подсветку ошибки в тот момент, когда пользователь
    *  что-то набирает в поле
    * */
    aboutField.addEventListener("input", function (event) {
        if (aboutField.parentElement.classList.contains("has-error")) {
            aboutField.parentElement.classList.remove("has-error");
            aboutField.classList.remove("form-control-error");
            aboutHelp.classList.add("hidden");
        }
    });





    /* РАБОТАЕМ С ПОЛЕМ "ЛОГИН" */

    var loginField = document.querySelector("#login");
    var loginHelp = document.querySelector("#login-help");

    function validateLogin(login) {

        var re = /^[A-z0-9]+$/;

        if (login !== "" && re.test(login) === false) {
            loginField.parentElement.classList.add("has-error");
            loginField.classList.add("form-control-error");
            loginHelp.classList.remove("hidden");
        } else {
            loginField.parentElement.classList.remove("has-error");
            loginField.classList.remove("form-control-error");
            loginHelp.classList.add("hidden");
        }

    }

    loginField.addEventListener("input", function (event) {
        validateLogin(loginField.value);
    });





    /* РАБОТАЕМ С ПОЛЕМ "ПОЧТА" */

    var emailField = document.querySelector("#email");
    var emailHelp = document.querySelector("#email-help");


    function validateEmail(email) {

        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email !== "" && re.test(email) === false) {
            emailField.parentElement.classList.add("has-error");
            emailField.classList.add("form-control-error");
            emailHelp.classList.remove("hidden");
        } else {
            emailField.parentElement.classList.remove("has-error");
            emailField.classList.remove("form-control-error");
            emailHelp.classList.add("hidden");
        }

    }

    emailField.addEventListener("blur", function (event) {
        validateEmail(emailField.value);
    });

    emailField.addEventListener("input", function (event) {
        if (emailField.parentElement.classList.contains("has-error")) {
            emailField.parentElement.classList.remove("has-error");
            emailField.classList.remove("form-control-error");
            emailHelp.classList.add("hidden");
        }
    });





    /* РАБОТАЕМ С ПОЛЯМИ ПАРОЛЕЙ */

    var passField = document.querySelector("#pass");

    var secondPassField = document.querySelector("#second-pass");
    var secondPassHelp = document.querySelector("#second-pass-help");

    function checkPasswords(firstPass, secondPass) {

        if ((firstPass !== secondPass) && firstPass !== "" && secondPass !== "") {

            passField.parentElement.classList.add("has-error");
            passField.classList.add("form-control-error");

            secondPassField.parentElement.classList.add("has-error");
            secondPassField.classList.add("form-control-error");
            secondPassHelp.classList.remove("hidden");

        } else {

            passField.parentElement.classList.remove("has-error");
            passField.classList.remove("form-control-error");

            secondPassField.parentElement.classList.remove("has-error");
            secondPassField.classList.remove("form-control-error");
            secondPassHelp.classList.add("hidden");

        }

    }

    passField.addEventListener("blur", function (event) {
        checkPasswords(passField.value, secondPassField.value);
    });

    secondPassField.addEventListener("blur", function (event) {
        checkPasswords(passField.value, secondPassField.value);
    });

    /* эти два обработчика используются для того,
    *  чтобы убрать сообщения ошибки в тот момент,
    *  когда пользователь что-то вводит в поля
    *  паролей
    * */

    passField.addEventListener("input", function (event) {
        if (passField.parentElement.classList.contains("has-error")) {

            passField.parentElement.classList.remove("has-error");
            passField.classList.remove("form-control-error");

            secondPassField.parentElement.classList.remove("has-error");
            secondPassField.classList.remove("form-control-error");
            secondPassHelp.classList.add("hidden");

        }
    });

    secondPassField.addEventListener("input", function (event) {
        if (secondPassField.parentElement.classList.contains("has-error")) {

            passField.parentElement.classList.remove("has-error");
            passField.classList.remove("form-control-error");

            secondPassField.parentElement.classList.remove("has-error");
            secondPassField.classList.remove("form-control-error");
            secondPassHelp.classList.add("hidden");

        }
    });





    var submitBtn = document.querySelector("#submit");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
    })

})();