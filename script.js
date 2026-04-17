const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const target = link.getAttribute('data-page');

        pages.forEach(p => p.classList.remove('active'));

        const activePage = document.getElementById(target);
        activePage.classList.add('active');

        const title = activePage.querySelector('.title');
        title.style.animation = 'none';
        title.offsetHeight;
        title.style.animation = null;
    });
});

/* POPUP */
const wrapper = document.querySelector('.wrapper');
const overlay = document.querySelector('.overlay');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

const loginForm = document.querySelector('.login');
const registerForm = document.querySelector('.register');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const formImage = document.querySelector('.form-image');

/* OPEN */
btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
    overlay.classList.add('active');
};

/* CLOSE */
iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    overlay.classList.remove('active');
};

/* SWITCH TO REGISTER */
registerLink.onclick = (e) => {
    e.preventDefault();
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    formImage.style.backgroundImage = "url('images/register.jpg')";
};

/* SWITCH TO LOGIN */
loginLink.onclick = (e) => {
    e.preventDefault();
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    formImage.style.backgroundImage = "url('images/login.jpg')";
};