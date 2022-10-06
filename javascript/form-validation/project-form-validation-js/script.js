const form = document.querySelector("form");

function setupInputValidation(elementId) {
    const inputElement = document.getElementById(elementId);
    const errorSpan = document.querySelector(`#${elementId} + span.error`);

    inputElement.addEventListener('input', (e) => {
        if (inputElement.validity.valid) {
            errorSpan.textContent = '';
            errorSpan.className = 'error';
        } else {
            showError();
        }
    });

    function showError() {
        switch(inputElement.id) {
            case 'mail':
                detectEmailError();
                break;
            case 'country':
                detectCountryError();
                break;
            case 'postcode':
                detectPostCodeError();
                break;
            case 'password':
                detectPasswordError();
                break;
            case 'password-confirmation':
                detectPasswordConfirmationError();
                break;
        }

        errorSpan.className = "error active";
    }

    const detectEmailError = () => {
        if (inputElement.validity.valueMissing) {
            errorSpan.textContent = 'You will need to enter an email address.';
        } else if (inputElement.validity.typeMismatch) {
            // If the field doesn't contain an email address,
            // display the following error message.
            errorSpan.textContent = "Entered value needs to be an e-mail address.";
        } else if (inputElement.validity.tooShort) {
            // If the data is too short,
            // display the following error message.
            errorSpan.textContent = `Email should be at least ${inputElement.minLength} characters; you entered ${inputElement.value.length}.`;
        }
    }

    const detectCountryError = () => {
        if (inputElement.validity.patternMismatch) {
            errorSpan.textContent = 'Country names can only contain letters';
        }
    }

    const detectPostCodeError = () => {
        if (inputElement.validity.patternMismatch) {
            errorSpan.textContent = 'Must contain a four digit numerical postcode.';
        }
    }

    const detectPasswordError = () => {
        if (inputElement.validity.patternMismatch) {
            errorSpan.textContent = 'Password must contain a minimum of eight characters, and at least one letter and one number';
        }
    }

    const detectPasswordConfirmationError = () => {
        const inputToValidate = document.getElementById('password').value;

        if (inputElement.value != inputToValidate) {
            errorSpan.textContent = 'Passwords must match.';
        }
    }
}

setupInputValidation('mail');
setupInputValidation('country');
setupInputValidation('postcode');
setupInputValidation('password');
setupInputValidation('password-confirmation');


form.addEventListener('submit', (e) => {
    form.preventDefault();
});
