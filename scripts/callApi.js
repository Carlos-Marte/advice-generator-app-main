const URL = "https://api.adviceslip.com/advice";

const callApi = async () => {
    const response = await fetch(URL);
    if (!response.ok) throw new Error(alert(`ERROR: ${response.status}`));
    return await response.json();
}


export { callApi }