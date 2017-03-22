"use strict";


(function() {


    function Field(formObj, fieldElem) {

        this._inputElem = fieldElem.querySelector(".form-control");
        this._helpElem = fieldElem.querySelector(".help-block");

        var self = this;

        this._setFieldInvalid = function() {
            self._inputElem.parentElement.classList.add("has-error");
            self._inputElem.classList.add("form-control-error");
            self._helpElem.classList.remove("hidden");

            formObj.checkForm();
        };

        this._setFieldValid = function() {
            self._inputElem.parentElement.classList.remove("has-error");
            self._inputElem.classList.remove("form-control-error");
            self._helpElem.classList.add("hidden");

            formObj.checkForm();
        };

    }


    window.Field = Field;


})();
