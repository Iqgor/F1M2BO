const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");


let directionsButtons = {
    "Rechtdoor": getElementById('knopRechtdoor'),
    "Links": getElementById('knopLinks'),
    "Rechts": getElementById('knopRechts'),
    "Achteruit": getElementById('knopAchteruit')
}

let current_index = 0;

let lokaties = [
    {
        "titel": "plaats 0",
        "foto": "fotos/ingang.jpg",
        "directions": {
            "Links": 2,
            "Rechts": 1
        }
    },
    {
        "titel": "plaats 1",
        "foto": "fotos/zaal.jpg",
        "directions": {
            "Links": 3,
            "Rechts": 4,
            "Rechtdoor": 5
        }
    },
    {
        "titel": "plaats 2",
        "foto": "fotos/restaurant.jpg",
        "directions": {
            "Achteruit": 0
        }

    },
    {
        "titel": "plaats 3",
        "foto": "fotos/mannen.jpg",
        "directions": {
            "Rechts": 6,
            "Achteruit": 1
        }
    },
    {
        "titel": "plaats 4",
        "foto": "fotos/melk.jpg",
        "directions": {
            "Achteruit": 1
        }
    },
    {
        "titel": "plaats 5",
        "foto": "fotos/nachtwacht.jpg",
        "directions": {
            "Achteruit": 1,
            "Rechts": 6
        }
    },
    {
        "titel": "plaats 6",
        "foto": "fotos/zwaan.jpg",
        "directions": {
            "Links": 5,
            "Achteruit": 3
        }
    },
]

function show(index) {
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index
    //knoppen opnieuw berekenen   
    updateDirections();
} function updateDirections() {
    // haal de mogelijke directions op voor currunt_index   
    let possible = locaties[current_index].directions;
    // zet de diretion key in een aparte variable    
    let possible_keys = Object.keys(possible);
    // zet de keys van de buttons in een aparte variable   
    let buttons_keys = Object.keys(directionButtons);
    // Zet eerst alle knoppen uit    
    for (const key of buttons_keys) {
        directionsButtons[key].style.visibility = "hidden";
    }
    for (const key of possible_keys) {
        directionsButtons[key].style.visibility = "visible";
    }
    // Zet nu de mogelijke knoppen
    
}


function getInput() {
    show(myInput.value)
    myInput.value = "",
        myInput.focus();
} function goDirection(richting) {
    let punt_index = lokaties[current_index].directions[richting];
    console.log(current_index)
    show(punt_index);
} show(0)

