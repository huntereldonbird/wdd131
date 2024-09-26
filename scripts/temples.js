const lastModified = document.querySelector("#lastModified");
const copyright = document.querySelector("#copyright");

const today = new Date();

lastModified.innerHTML = `last modified: <span class="highlight">${document.lastModified}</span>`;

copyright.innerHTML = `&copy <span class="highlight">${today.getFullYear()}</span> Hunter Bird`;



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {

    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});