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
        if (!inputElement.validity.valid) {
            errorSpan.textContent = 'Passwords must match.';    
        }
    }   
}

const checkPasswordsMatch = (e) => {
    const input = document.getElementById('password-confirmation');
    const inputToValidate = document.getElementById('password').value;

    if (input.value != inputToValidate) {
        input.setCustomValidity('Passwords must match.');
        console.log(input.checkValidity());
    } else {
        input.setCustomValidity('');
    }
}

setupInputValidation('mail');
setupInputValidation('country');
setupInputValidation('postcode');
setupInputValidation('password');

const passwordConf = document.getElementById('password-confirmation');
passwordConf.addEventListener('input', checkPasswordsMatch);

setupInputValidation('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});
