const character = document.querySelector("#character")
const kledingStuk = document.querySelector("#plaatje1")
const trui = document.querySelector("#plaatje2")
const paarseBroek = document.querySelector("#plaatje6")
const geleSchoenen = document.querySelector("#plaatje10")
const titelElement = document.querySelector("#titelElement");

let verderButton = document.getElementById("knop");
let clickCounter = 0;

function hoed(){
    character.src = "images/aardenormaal.svg"
    // Speel het geluid af wanneer plaatje 1 (hoed) wordt ingedrukt
    let audio = document.getElementById("clickSound");
    audio.play();
}

function trouser(){
    character.src = "images/aardewhitetrouser.svg"
      // Speel het geluid af wanneer plaatje 2 (hoed) wordt ingedrukt
      let audio = document.getElementById("clickSound");
      audio.play();
}

function broek(){
    character.src = "images/aardelevel3.svg"
      // Speel het geluid af wanneer plaatje 6 (hoed) wordt ingedrukt
      let audio = document.getElementById("clickSound");
      audio.play();
}

function schoenen(){
    character.src = "images/aardelevel4.svg"
    titelElement.textContent = "De outfit is af!";
      // Speel het geluid af wanneer plaatje 10 (hoed) wordt ingedrukt
      let audio = document.getElementById("clickSound");
      audio.play();
}
// Code gebruikt van ChatGPT //
function verbergEnToonPlaatjes() {
    clickCounter++;

    if (clickCounter === 1) {
        // Verberg de hoed
        let eerstePlaatje = document.getElementById("plaatje1");
        if (eerstePlaatje) {
            eerstePlaatje.style.display = "none";
        }

        // Toon de eerste set van drie nieuwe plaatjes
        let plaatjesToon = ["plaatje2", "plaatje3", "plaatje4"];
        plaatjesToon.forEach(function(id) {
            let plaatje = document.getElementById(id);
            if (plaatje) {
                plaatje.style.display = "block";
            }
        });
    } else if (clickCounter === 2) {
        // Verberg de vorige set van drie plaatjes
        let vorigePlaatjes = ["plaatje2", "plaatje3", "plaatje4"];
        vorigePlaatjes.forEach(function(id) {
            let plaatje = document.getElementById(id);
            if (plaatje) {
                plaatje.style.display = "none";
            }
        });

        // Toon de volgende set van drie plaatjes
        let plaatjesToon = ["plaatje5", "plaatje6", "plaatje7"];
        plaatjesToon.forEach(function(id) {
            let plaatje = document.getElementById(id);
            if (plaatje) {
                plaatje.style.display = "block";
            }
        });
    } else if (clickCounter === 3) {
        // Verberg de vorige set van drie plaatjes
        let vorigePlaatjes = ["plaatje5", "plaatje6", "plaatje7"];
        vorigePlaatjes.forEach(function(id) {
            let plaatje = document.getElementById(id);
            if (plaatje) {
                plaatje.style.display = "none";
            }
        });

        // Toon de laatste set van drie plaatjes
        let plaatjesToon = ["plaatje8", "plaatje9", "plaatje10"];
        plaatjesToon.forEach(function(id) {
            let plaatje = document.getElementById(id);
            if (plaatje) {
                plaatje.style.display = "block";
            }
        });
    }
}

// Voeg een event listener toe aan de knop
verderButton.addEventListener("click", verbergEnToonPlaatjes);
kledingStuk.addEventListener('click', hoed)
trui.addEventListener('click', trouser)
paarseBroek.addEventListener('click', broek)
geleSchoenen.addEventListener('click', schoenen)






