import { callApi } from "./callApi.js";

const URL = "https://api.adviceslip.com/advice"
const pAdviceId = document.querySelector("#advice-id");
const h2AdviceId = document.querySelector("#advice-message");
const diceAdviceId = document.querySelector("#advice-dice");

diceAdviceId.addEventListener('click', () => {
    fetch(URL)
        .then(response => {
            if(response.ok) {
                console.log(`STATUS: ${response.status}`);
                return response.json();
            }
        })
        .then(data => {
            pAdviceId.textContent = `Advice #${data.slip.id}`;
            h2AdviceId.textContent = `"${data.slip.advice}"`;
        })
        .catch(err => alert(err));

});