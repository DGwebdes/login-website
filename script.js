const wrapper = document.getElementById('container');
const register = document.getElementById('register-link');
const login = document.getElementById('login-link');
const btnLogin = document.querySelector('.btn-login');
const closeBtn = document.querySelector('.icon-close');

register.addEventListener('click', () => {
    wrapper.classList.add('active');
})

login.addEventListener('click', () => {
    wrapper.classList.remove('active')
});

btnLogin.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
})

closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
})