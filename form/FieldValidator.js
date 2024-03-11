'use strict';

class FieldValidator {
    constructor(formFieldSelector, errorMsgSelector) {
        this.formField = document.querySelector(formFieldSelector);
        this.fieldId = this.formField.id;
        this.passwordField = document.querySelector('#password');
        if (!errorMsgSelector) errorMsgSelector = `${formFieldSelector} + span`;
        this.validationMessage = document.querySelector(errorMsgSelector);
    }

    validate = () => {
        const validators = {
            "username": this.validateUsername,
            "email": this.validateEmail,
            "password": this.validatePassword,
            "password-confirmation": this.validatePasswordConfirmation
        };

        return validators[this.fieldId] ? this.validateField(validators[this.fieldId]) : false;
    }

    validateField = (validator) => {
        if (this.formField.value === '') {
            return false;
        }
        return validator();
    }

    validateUsername = () => {
        // Add username validation logic here
        return true;
    }

    validateEmail = () => {
        // Add email validation logic here
        return true;
    }

    validatePassword = () => {
        const password = this.formField.value;
        if (password.length < 4) {
            this.validationFail("Password should contain min 4 characters");
            return false;
        } else if (password.length > 6) {
            this.validationFail("Password should contain max 6 characters");
            return false;
        } else {
            this.validationSuccess();
            return true;
        }
    }

    validatePasswordConfirmation = () => {
        const passwordConfirmation = this.formField.value;
        const password = this.passwordField.value;
        if (password === passwordConfirmation) {
            this.validationSuccess();
            return true;
        } else {
            this.validationFail("Password confirmation does not match password");
            return false;
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