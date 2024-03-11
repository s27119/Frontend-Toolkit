class FormValidator {
    constructor() {
        this.formFields = [];
        this.form = document.getElementById("form");
        this.submitButton = this.form.querySelector('.register-button');
        this.submitButton.disabled = true; // disable the button initially
        this.processForm();
        this.init();
    }

    processForm = () => {
        this.form.querySelectorAll("input").forEach(element => {
            this.addFormField(`#${element.id}`);
        });
    }

    addFormField = (cssSelector) => {
        const fieldValidator = new FieldValidator(cssSelector);
        this.formFields.push(fieldValidator);
    }

    init() {
        this.form.querySelectorAll("input").forEach(inputField => {
            inputField.addEventListener("blur", (element) => {
                element.preventDefault();
                this.validateForm();
            });
        });

        this.form.addEventListener("submit", (event) => {
            const formResults = this.validateForm();
            if (formResults.includes(false)) {
                event.preventDefault();
            }
        });
    }

    validateForm = () => {
        const formResults = this.formFields.map(field => field.validate());
        this.submitButton.disabled = formResults.includes(false);
        return formResults;
    }
}