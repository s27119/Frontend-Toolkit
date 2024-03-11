'use strict';

class FieldValidator {
    constructor(formFieldSelector, errorMsgSelector) {
        this.formField = document.querySelector(formFieldSelector);
        this.type = this.formField.type;
        if (!errorMsgSelector) errorMsgSelector = `${formFieldSelector} + span`;
        this.validationMessage = document.querySelector(errorMsgSelector);
    }

    validate = () => {
        switch (this.type) {
            case "text":
                return this.validateText();
            case "email":
                return this.validateEmail();
            case "password":
                return this.validatePassword();
            default :
                return false;
        }
    }

    validateText = () => {
        return true;
    }

    validateEmail = () => {
        return true;
    }

    validatePassword = () => {
        const password = this.formField.value;
        if (password.length > 3) {
            this.validationFail("Password should contain min 4characters");
            return false;
        } else if (password.length > 6) {
            this.validationFail("Password should contain max 5 characters");
            return false;
        } else {
            this.validationSuccess();
            return true;
        }
    }

    validationFail = (message) => {
        this.formField.classList.add("validation-fail");
        this.validationMessage.classList.add("validation-fail");
        this.validationMessage.classList.remove("validation-success");
        this.formField.classList.remove("validation-success");
        this.validationMessage.innerHTML = message;

    }

    validationSuccess = () => {
        this.validationMessage.innerHTML = "";
        this.validationMessage.classList.remove("validation-fail");
        this.formField.classList.remove("validation-fail");
        this.validationMessage.classList.add("validation-success");
        this.formField.classList.add("validation-success");
    }
}