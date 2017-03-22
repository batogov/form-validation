"use strict";


(function() {


    function NumberField(formObj, fieldElem, min, max) {
        this._min = min;
        this._max = max;
        var self = this;

        Field.apply(this, arguments);

        this._inputElem.oninput = function(event) {
            var value = self._inputElem.value;

            if (!(parseInt(value) > self._min && parseInt(value) < self._max) && value !== "") {
                self._setFieldInvalid();
            } else {
                self._setFieldValid();
            }
        };

    }


    window.NumberField = NumberField;


})();