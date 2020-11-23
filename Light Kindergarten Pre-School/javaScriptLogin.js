const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //Get value from the input
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Nama Penggunanya belom ada nih');
    } else {
        //add success class
        setSuccessFor(username);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Masukin Katasandinya dulu');
    } else {
        setSuccessFor(password);
    }
}


function setErrorFor(input, message) {
    const formtControl = input.parentElement;
    const small = formtControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formtControl.className = 'formt-control error';
}

function setSuccessFor(input) {
    const formtControl = input.parentElement;
    formtControl.className = 'formt-control success';
}