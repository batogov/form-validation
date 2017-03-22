"use strict";


(function() {


    function PassFields(formObj, firstPassFieldElem, secondPassFieldElem) {

        this._firstPassInputElem = firstPassFieldElem.querySelector(".form-control");

        this._secondPassInputElem = secondPassFieldElem.querySelector(".form-control");
        this._secondPassHelpElem = secondPassFieldElem.querySelector(".help-block");

        var self = this;

        this._setFieldsInvalid = function() {
            self._firstPassInputElem.parentElement.classList.add("has-error");
            self._firstPassInputElem.classList.add("form-control-error");

            self._secondPassInputElem.parentElement.classList.add("has-error");
            self._secondPassInputElem.classList.add("form-control-error");
            self._secondPassHelpElem.classList.remove("hidden");

            formObj.checkForm();
        };

        this._setFieldsValid = function() {
            self._firstPassInputElem.parentElement.classList.remove("has-error");
            self._firstPassInputElem.classList.remove("form-control-error");

            self._secondPassInputElem.parentElement.classList.remove("has-error");
            self._secondPassInputElem.classList.remove("form-control-error");
            self._secondPassHelpElem.classList.add("hidden");

            formObj.checkForm();
        };

        this._onInputFunction = function(event) {
            var firstPassValue = self._firstPassInputElem.value;
            var secondPassValue = self._secondPassInputElem.value;

            if ((firstPassValue !== secondPassValue) && firstPassValue !== "" && secondPassValue !== "") {
                self._setFieldsInvalid();
            } else {
                self._setFieldsValid();
            }
        };

        this._firstPassInputElem.addEventListener("input", this._onInputFunction);
        this._secondPassInputElem.addEventListener("input", this._onInputFunction);

    }


    window.PassFields = PassFields;


})();