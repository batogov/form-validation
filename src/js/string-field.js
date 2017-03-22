"use strict";


(function() {


    function StringField(fieldElem, re) {
        this._re = re;
        var self = this;

        Field.apply(this, arguments);

        this._inputElem.oninput = function(event) {
            var value = self._inputElem.value;

            if (self._re.test(value) === false && value !== "") {
                self._setFieldInvalid();
            } else {
                self._setFieldValid();
            }
        };

    }


    window.StringField = StringField;


})();