(function() {

    nameFieldElem = document.querySelector(".name-field");
    var nameField = new StringField(nameFieldElem, /^[А-я]+$/);

    surnameFieldElem = document.querySelector(".surname-field");
    var surnameField = new StringField(surnameFieldElem, /^[А-я]+$/);

    ageFieldElem = document.querySelector(".age-field");
    var ageField = new NumberField(ageFieldElem, 0, 100);

    loginFieldElem = document.querySelector(".login-field");
    var loginField = new StringField(loginFieldElem, /^[A-z0-9]+$/);

    emailFieldElem = document.querySelector(".email-field");
    var emailField = new StringField(emailFieldElem, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    aboutFieldElem = document.querySelector(".about-field");
    var aboutField = new TextField(aboutFieldElem, 20);

})();
