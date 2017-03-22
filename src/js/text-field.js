"use strict";


(function() {


    function TextField(formObj, fieldElem, wordsCount) {
        this._wordsCount = wordsCount;
        var self = this;

        Field.apply(this, arguments);

        this._getWordsCount = function(text) {
            text = text.replace(/(^\s*)|(\s*$)/gi, "");
            text = text.replace(/[ ]{2,}/gi, " ");
            text = text.replace(/\n /, "\n");
            return text.split(' ').length;
        };

        this._inputElem.oninput = function(event) {
            var value = self._inputElem.value;

            if (self._getWordsCount(value) < self._wordsCount && value !== "") {
                self._setFieldInvalid();
            } else {
                self._setFieldValid();
            }
        };

    }


    window.TextField = TextField;


})();