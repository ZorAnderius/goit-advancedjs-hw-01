import throttle from "lodash.throttle";

const LOCAL_KEY = 'feedback-form-state';
const lodash_time = 500;

const refs = {
    formEl: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('input[name="email"]'),
    messageInput: document.querySelector('textarea[name="message"]'),
}

let feedback = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
refs.emailInput.value = feedback.email || '';
refs.messageInput.value = feedback.message || '';

const handlerInput = e => { 
    const { name, value } = e.target;
    feedback = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
    feedback[name] = value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(feedback));
}

const handlerSubmit = e => {
    e.preventDefault();
    feedback = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
    console.log(feedback);
    localStorage.removeItem(LOCAL_KEY);
    refs.formEl.reset();
}

refs.formEl.addEventListener('input', throttle(handlerInput, lodash_time));
refs.formEl.addEventListener('submit', handlerSubmit);