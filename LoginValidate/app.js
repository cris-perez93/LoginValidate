const formulario = document.getElementById ('formulario');
const inputEmail = document.getElementById ('email');
const inputPassword = document.getElementById ('password');


formulario.addEventListener('submit', (e) =>{
    e.preventDefault()

    const expresionsEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ //standard

    const expresionsPassword = /^(?:(?=.*?[A-Z])(?:(?=.*?[0-9])(?=.*?[-!@#$%^&*()_[\]{},.<>+=])|(?=.*?[a-z])(?:(?=.*?[0-9])|(?=.*?[-!@#$%^&*()_[\]{},.<>+=])))|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-!@#$%^&*()_[\]{},.<>+=]))[A-Za-z0-9!@#$%^&*()_[\]{},.<>+=-]{8,50}$/  // 8 a 50 digitos, minimo una mayuscula , minuscula y numero.
     
    let emptyEmail = inputEmail.value===""
    let emptyPassword = inputPassword.value===""

    if(emptyEmail){
        document.getElementById('validate').classList.add('please-active');
    } else {
        document.getElementById('validate').classList.remove('please-active')
    };

    if(!emptyEmail && !expresionsEmail.test(inputEmail.value)){
        document.getElementById('regexValidate').classList.add('regex__login-active')
        
    }else{
        document.getElementById('regexValidate').classList.remove('regex__login-active')
    }

    if(emptyPassword){
        document.getElementById('passwordValidate').classList.add('please-active');
    } else {
        document.getElementById('passwordValidate').classList.remove('please-active')
    };

    if(!emptyPassword && !expresionsPassword.test(inputPassword.value)){
        document.getElementById('regexPass').classList.add('regex__login-active')
    }else{
        document.getElementById('regexPass').classList.remove('regex__login-active')
    }

  
})