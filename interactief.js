const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");


let directionButtons = {
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

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    MyPlace.innerHTML = "Je bent op: "+ lokaties[index].place;
    current_index = index;
    update_directions();
};

function update_directions(){
    let possible = lokaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionButtons);

    for(const key of button_keys){
        directionButtons[key].style.visibility = 'hidden';
    };
    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    };
};

function getinput(){
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}
show(0)




