const storage = localStorage;
const consentName = 'consent';

const consentDiv = document.querySelector('.consent-div');
const acceptCookiesBtn = document.querySelector('.accept-cookies');

const shouldShowConsent = () => !storage.getItem(consentName);
const storeConsent = () => storage.setItem(consentName, true);

window.addEventListener('load', () => {
    if(shouldShowConsent()) {
        consentDiv.classList.add('pop');
        acceptCookiesBtn.addEventListener('click', () => {
            consentDiv.classList.remove('pop');
            storeConsent();
        });
    }
});