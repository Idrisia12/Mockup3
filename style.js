const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const firstValue = first.value.trim();
    const lastValue = last.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstValue === '') {
        setErrorFor(first, 'First Name cannot be empty');
    } else {
        setSuccessFor(first);
    }

    if(lastValue === '') {
        setErrorFor(last, 'Last Name cannot be blank');
    } else {
        setSuccessFor(last);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    } else if(passwordValue !== passwordValue) {
        setErrorFor(password, 'Password cannot be empty');
    } else{
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});
