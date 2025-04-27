const lgnFormSubmitBtn = document.querySelector('#login-btn');
const lgnErrorMsg = document.querySelector('#sign-subtitle');

lgnFormSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let error = false;

    if (!error) window.location.href = "dashboard.html";
    else {
        lgnErrorMsg.classList.toggle('login-error');
        lgnErrorMsg.textContent = 'Email ou senha incorretos'
        setTimeout(() => {
            lgnErrorMsg.classList.toggle('login-error');
            lgnErrorMsg.textContent = 'Informe seus dados:'
        }, 4000);
    }

})