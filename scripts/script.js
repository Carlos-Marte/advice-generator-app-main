import { callApi } from "./callApi.js";

const pAdviceId = document.querySelector("#advice-id");
const h2AdviceId = document.querySelector("#advice-message");
const diceAdviceId = document.querySelector("#advice-dice");

diceAdviceId.addEventListener('click', () => {
    callApi()
        .then(data => {
            pAdviceId.textContent = `Advice #${data.slip.id}`;
            h2AdviceId.textContent = `"${data.slip.advice}"`;
        });
});