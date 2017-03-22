"use strict";


(function() {


    var formElem = document.querySelector("#form");
    var form = new Form(formElem);

    var nameFieldElem = document.querySelector(".name-field");
    var nameField = new StringField(form, nameFieldElem, /^[А-я]+$/);

    var surnameFieldElem = document.querySelector(".surname-field");
    var surnameField = new StringField(form, surnameFieldElem, /^[А-я]+$/);

    var ageFieldElem = document.querySelector(".age-field");
    var ageField = new NumberField(form, ageFieldElem, 0, 100);

    var loginFieldElem = document.querySelector(".login-field");
    var loginField = new StringField(form, loginFieldElem, /^[A-z0-9]+$/);

    var emailFieldElem = document.querySelector(".email-field");
    var emailField = new StringField(form, emailFieldElem, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    var aboutFieldElem = document.querySelector(".about-field");
    var aboutField = new TextField(form, aboutFieldElem, 20);

    var firstPassFieldElem = document.querySelector(".pass-field");
    var secondPassFieldElem = document.querySelector(".second-pass-field");
    var passFields = new PassFields(form, firstPassFieldElem, secondPassFieldElem);


})();
