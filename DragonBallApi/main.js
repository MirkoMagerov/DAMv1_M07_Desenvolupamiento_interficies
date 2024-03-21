function init() {
    fetchAPI("https://dragonball-api.com/api/characters?limit=100");
}

function fetchAPI(url) {
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })

        .then((json) => {
            characters = json.items;
            let names = getNames();
            characters.forEach(character => {
                if (names.includes(character.name)) {
                    document.body.appendChild(showDragonBallCharacter(character));
                }
            })
        })
}

function showDragonBallCharacter(character) {
    const characterDiv = document.createElement("div");
    let name = document.createElement("h2");
    name.textContent = `Nombre: ${character.name}`; 

    let ki = document.createElement("h3");
    ki.textContent = `Ki: ${character.ki}`;    

    let race = document.createElement("h3");
    race.textContent = `Raza: ${rcharacterace.race}`;

    let image = document.createElement("img");
    image.src = character.image;
    image.style.marginTop = "20px";
    image.style.maxWidth = "150px";
    image.style.maxHeight = "250px";

    characterDiv.append(name);
    characterDiv.append(ki);
    characterDiv.append(race);
    characterDiv.append(image);

    return characterDiv;
}

function getNames() {
    let characters = [];
    for(let i = 0; i < 4; i++) {
        characters.push(prompt("Escribe el nombre de un personaje de Dragon Ball"));
    }
    return characters;
}