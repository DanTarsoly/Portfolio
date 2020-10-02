const buttons = document.getElementsByTagName('button');
const links = document.getElementsByTagName('a');
const langBtn = document.getElementById('lang-btn');
const langImg = document.getElementById('lang-img');

for (let button of buttons) {
    button.addEventListener('click', () => document.activeElement.blur());
}
for (let link of links) {
    link.addEventListener('click', () => document.activeElement.blur());
}

let locale = navigator.language.substr(0,2);

let language = locale == 'hu' ? 'hu' : 'en';
langImg.src = language == 'hu' ? '../content/uk-flag.png' : '../content/hu-flag.png'
setLanguage(language);

langBtn.onclick = () => {
    switch(language) {
        case 'en':
            langImg.src = '../content/uk-flag.png'
            language = 'hu'
            break;
        case 'hu':
            langImg.src = '../content/hu-flag.png'
            language = 'en'
            break;
    }
    setLanguage(language);
};

function setLanguage(lang) {
    document.querySelectorAll('body [lang]').forEach(element => {
        element.setAttribute('hidden', 'true');
    });

    document.querySelectorAll('body [lang="'+lang+'"]').forEach(element => {
        element.removeAttribute('hidden');
    });
}