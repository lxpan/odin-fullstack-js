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
        console.log("check country error");
        // let allLettersPattern = /^[a-zA-Z]*$/;
        // if (!inputElement.value.match(allLettersPattern)) {
        //     errorSpan.textContent = 'Country names can only contain letters.';
        // }
        if (inputElement.validity.patternMismatch) {
            errorSpan.textContent = 'Country names can only contain letters';
        }
    }

    function showError() {
        switch(inputElement.type) {
            case 'email':
                detectEmailError();
                break;
            case 'text':
                detectCountryError();
                break;
        }

        errorSpan.className = "error active";
    }
}

setupInputValidation('mail');
setupInputValidation('country');


form.addEventListener('submit', (e) => {
    form.preventDefault();
});