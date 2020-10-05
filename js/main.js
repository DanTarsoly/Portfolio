const enIcon = '../content/icons/uk_flag.png';
const huIcon = '../content/icons/hu_flag.png';
const buttons = document.getElementsByTagName('button');
const links = document.getElementsByTagName('a');
const langBtn = document.getElementById('lang-btn');
const flagImg = document.getElementById('flag-img');
const supportedLan = ['en', 'hu'];

// Clears the focus after a link or button was clicked or touched
for (let button of buttons) {
    button.addEventListener('click', () => document.activeElement.blur());
    button.addEventListener('touchend', () => document.activeElement.blur());
}
for (let link of links) {
    link.addEventListener('click', () => document.activeElement.blur());
    link.addEventListener('touchend', () => document.activeElement.blur());
}

// Get language from local storage or browser settings
let language = localStorage.getItem("language") || navigator.language.substr(0,2);

// Filter supported languages
// English as default (for not supported ones)
// Then set the language unless it's English
if (language != 'en' && supportedLan.includes(language)) {
    updateBtn(language);
    setLanguage(language);
}

// Handle language-button click
langBtn.onclick = () => {
    let newLang = langBtn.getAttribute('language');
    setLanguage(newLang);
    updateBtn(newLang)
    localStorage.setItem("language", newLang);
}

// Changes the laguage on the page
function setLanguage(lang) {
    document.querySelectorAll('body [lang]').forEach(element => {
        element.setAttribute('hidden', 'true');
    });
    document.querySelectorAll('body [lang="'+lang+'"]').forEach(element => {
        element.removeAttribute('hidden');
    });
}

// Updates the language switching button
function updateBtn(currLang) {
    switch (currLang) {
        case 'en':
            langBtn.setAttribute('language', 'hu');
            flagImg.src = huIcon;
            break;
        case 'hu':
            langBtn.setAttribute('language', 'en');
            flagImg.src = enIcon;
            break;
    }
}