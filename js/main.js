const buttons = document.getElementsByTagName('button');
const links = document.getElementsByTagName('a');

for (let button of buttons) {
    button.addEventListener('touchend', () => document.activeElement.blur());
}
for (let link of links) {
    link.addEventListener('touchend', () => document.activeElement.blur());
}

const enBtn = document.getElementById('en-btn');
const huBtn = document.getElementById('hu-btn');
enBtn.onclick = () => setLanguage("en");
huBtn.onclick = () => setLanguage("hu");

let locale = navigator.language.substr(0,2);
if (locale == "hu") setLanguage(locale);

function setLanguage(lang) {
    document.querySelectorAll('body [lang]').forEach(element => {
        element.setAttribute('hidden', 'true');
    });

    document.querySelectorAll('body [lang="'+lang+'"]').forEach(element => {
        element.removeAttribute('hidden');
    });
}