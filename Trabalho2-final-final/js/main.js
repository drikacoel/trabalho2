// declarando as constantes a serem utilizadas


const emailEl = document.querySelector('#email');

const form = document.querySelector('#signup');
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

form.addEventListener('submit', e => {

    // previne que o formulário fique recarregando
    e.preventDefault();
    // validation

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isPasswordStrong = checkConfirmPassword();
    
    let isFormValid = isUsernameValid && isEmailValid && isPasswordStrong && isPasswordValid;

    if (isFormValid){

    }

});


const isEmailValid = (email) => {

    // função para testar se email é válido

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};



const showError = (input, message) => {

    // get the form-field element
    const formField = input.parentElement;

    // add the error class

    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message

    const error = formField.querySelector('small');
    error.textContent = message;

};

const showSuccess = input => {
    
    // get the form-field element
    const formField = input.parentElement;
    // remove the error class
    formField.classList.remove('error');
        // add the error class
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = 'Valid';

}   



const checkEmail = () => {

    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)){
         
        showError(emailEl, 'Email cannot be blank');
        
    } else if (!isEmailValid(email)){

        showError(emailEl, 'Email is not valid.');
    } else {
        showSuccess(emailEl);
        valid = true;
    }

    return valid;

};




// REAL TIME FEEDBACK

form.addEventListener('input', e => {
    switch(e.target.id){
        
        case 'email':
            checkEmail();
            break;
        
    }
});

const debounce = (fn, delay = 500) => {

    let timeoutId;

    return (...args) => {
        // cancela o tempo anterior
        if (timeoutId){
            clearTimeout(timeoutId);
        }
        // estabelece um novo prazo

        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
function abrirMensagem(){
    var divMensagens = document.getElementById('mensagens');
    divMensagens.innerHTML= 'Enviamos um link de redefinição de senha para seu email ';
}