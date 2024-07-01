const character = document.querySelector("#character");
const titelElement = document.querySelector("#titelElement");
const verbergKnop = document.getElementById("verbergKnop");
const verderButton = document.getElementById("knop");

let clickCounter = 0;

// Bron: ChatGPT //
function changeCharacter(imageSrc) {
    character.src = imageSrc;
    let audio = document.getElementById("clickSound");
    audio.play();
}

function setupClickEvents() {
    // wanneer er wordt geklikt op het element met het ID "plaatje1", de functie changeCharacter("images/aardemethoed.svg") wordt uitgevoerd. //
    document.getElementById("plaatje1").addEventListener('click', () => changeCharacter("images/aardemethoed.svg"));
    document.getElementById("plaatje2").addEventListener('click', () => changeCharacter("images/aardewhitetrouser.svg"));
    document.getElementById("plaatje6").addEventListener('click', () => changeCharacter("images/aardezonderschoenen.svg"));
    document.getElementById("plaatje10").addEventListener('click', () => changeCharacter("images/aardeallekleding.svg"));
}

function toggleVisibility(elementsToShow, elementsToHide) {
    // Bron: ChatGPT //
    elementsToShow.forEach(id => {
        let element = document.getElementById(id);
        if (element) {
            element.style.display = "block";
        }
    });
    elementsToHide.forEach(id => {
        let element = document.getElementById(id);
        if (element) {
            element.style.display = "none";
        }
    });
}

function verbergEnToonPlaatjes() {
    clickCounter = clickCounter + 1;

    if (clickCounter === 1) {
        toggleVisibility(["plaatje2", "plaatje3", "plaatje4"], ["plaatje1"]);
    } else if (clickCounter === 2) {
        toggleVisibility(["plaatje5", "plaatje6", "plaatje7"], ["plaatje2", "plaatje3", "plaatje4"]);
    } else if (clickCounter === 3) {
        toggleVisibility(["plaatje8", "plaatje9", "plaatje10"], ["plaatje5", "plaatje6", "plaatje7"]);
    } else if (clickCounter === 4) {
        titelElement.textContent = "Jouw outfit is ready!";
        verderButton.textContent = "Opnieuw";
        toggleVisibility([], ["plaatje1", "plaatje2", "plaatje3", "plaatje4", "plaatje5", "plaatje6", "plaatje7", "plaatje8", "plaatje9", "plaatje10"]);
    } else if (clickCounter === 5) {
        character.src = "images/aardezonderkleding.svg";
        titelElement.textContent = "Kleed jouw planeet!";
        verderButton.textContent = "Verder";
        // clickCounter start weer opnieuw //
        clickCounter = 0;
        toggleVisibility(["plaatje1"], ["plaatje2", "plaatje3", "plaatje4", "plaatje5", "plaatje6", "plaatje7", "plaatje8", "plaatje9", "plaatje10"]);
    }
}

function verbergAarde() {
    if (character.style.display === "none") {
        character.style.display = "block";
        verbergKnop.textContent = "Verdwijnen";
    } 
    else {
        character.style.display = "none";
        verbergKnop.textContent = "Verschijnen";
    }
}

setupClickEvents();
verderButton.addEventListener("click", verbergEnToonPlaatjes);
verbergKnop.addEventListener("click", verbergAarde);
