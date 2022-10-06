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
        switch(inputElement.type) {
            case 'email':
                detectEmailError();
                break;
            case 'text':
                detectCountryError();
                break;
            case 'tel':
                detectPostCodeError();
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
        console.log('detect postcode error');
        if (inputElement.validity.patternMismatch) {
            errorSpan.textContent = 'Must contain a four digit numerical postcode.';
        }
    }
}

setupInputValidation('mail');
setupInputValidation('country');
setupInputValidation('postcode');


form.addEventListener('submit', (e) => {
    form.preventDefault();
});