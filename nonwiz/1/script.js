var histories = [];
const MAX_HISTORY = 20;

const listenToKeyPress = (e) => {
    const displayElement = document.querySelector("#now-typing");
    console.log({ e })
    displayElement.textContent = `${e.key.toUpperCase()} (${e.keyCode})`
    const keyPressed = e.code.includes("Key") ? e.code.substring(3) : e.code;
    histories.push(cleanKey(keyPressed));

    if (histories.length > MAX_HISTORY) histories.shift();
    recreateHistory();
}

const cleanKey = (i) => {
    if (i === "Space") return " ";
    if (i === "Enter") return ".";
    return i.length > 1 ? "" : i
}

const removeChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const recreateHistory = () => {
    const historyEle = document.querySelector("#histories");
    removeChildren(historyEle);

    histories.forEach(key => {
        const keyEle = document.createElement("kbd");
        keyEle.textContent = key;
        historyEle.appendChild(keyEle);
    })

}


window.addEventListener("keyup", listenToKeyPress);
window.addEventListener("keyup", (e) => {
    if (e.code == "Backspace") {
        histories.length = 0;
        recreateHistory();
        return;
    }
    if (e.code != "Enter") return;
    const sentence = histories.join("");
    const utterance = new SpeechSynthesisUtterance(sentence);
    speechSynthesis.speak(utterance);


})
