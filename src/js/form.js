"use strict";


(function() {


    function Form(formElem) {
        this._formElem = formElem;

        this._submitBtnElem = document.querySelector("#submit");
        this._submitHelpElem = document.querySelector("#submit-help");

        this._submitBtnElem.disabled = true;

        var self = this;

        this.checkForm = function () {
            var formGroupWithErrorCount = self._formElem.querySelectorAll(".has-error").length;
            var fieldInputs = self._formElem.querySelectorAll("input:not([type=submit])");
            var isAnyFieldInputEmpty = false;

            for (var i = 0; i < fieldInputs.length; i++) {
                if (fieldInputs[i].value === "") {
                    isAnyFieldInputEmpty = true
                }
            }

            if (formGroupWithErrorCount === 0 && (!isAnyFieldInputEmpty)) {
                self._submitBtnElem.disabled = false;
                self._submitHelpElem.classList.add("hidden");
            } else {
                self._submitBtnElem.disabled = true;
                self._submitHelpElem.classList.remove("hidden");
            }
        }
    }


    window.Form = Form;


})();