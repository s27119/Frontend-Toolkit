'use strict';
//powininem brac id oraz type!!!!!!!!! np text to username ale tez moze byc text field po prostu na opienie
class FormValidator {
    constructor() {
        this.formFields = [];
        this.form = document.getElementById("form");
        this.processForm();
        this.init();
    }

    processForm = () => {
        this.form.querySelectorAll("input").forEach(element => {
            this.addFormField(`#${element.id}`);
        });
    }

    addFormField = (cssSelector, options) => {
        const fieldValidator = new FieldValidator(cssSelector, options);
        this.formFields.push(fieldValidator);
    }

    init() {
        this.form.addEventListener("blur", (element) => {
            element.preventDefault();
            this.validateForm();
        });
    }

    validateForm = () => {
        const formResults = this.formFields.map(field => field.validate());
    }
}