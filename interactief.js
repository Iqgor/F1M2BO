const myTitle = document.getElementById("myTitle")
const myImage = document.getElementById("myImage")
const myInput = document.getElementById("myInput")



let directionButtons = {
    "Noord" : document.getElementById('knopNoord'),
    "Oost" : document.getElementById('knopOost'),
    "Zuid" : document.getElementById('knopZuid'),
    "West" : document.getElementById('knopWest')
}

let current_index = 0;


let locaties = [ //Array
    { //pos 0 object
        "titel": "plaats 0",
        "image": "fotos/het-rijksmuseum-in-amsterdam_4970_xl.jpg",
        "directions":{
            "Noord": 1,
        }
    },
    { //pos 1 object
        "titel": "plaats 1",
        "image": "fotos/foto1.jpg",
        "directions":{
            "Noord": 2,
            "Zuid": 0,
        }
    },
    { //pos 2 object
        "titel": "plaats 2",
        "image": "fotos/foto2.jpg",
        "directions":{
            "Noord": 3,
            "Oost": 6,
            "Zuid": 1,
        
            
        }
    },
    { //pos 3 object
        "titel": "plaats 3",
        "image": "fotos/3.jpg",
        "directions":{
            "Noord": 4,
            "Oost": 8,
            "Zuid":2,
            "West":7,
            
        }

    },
    { //pos 4 object
        "titel": "plaats 4",
        "image": "fotos/4.jpg",
        "directions":{
            "Noord": 5,
            "Oost":9,
            "Zuid":3,
        }
    },
    { //pos 5 object
        "titel": "plaats 5",
        "image": "fotos/5.jpg",
        "directions":{
            "Noord": 0,
            "Zuid": 4,
        }
    },
    { //pos 6 object
        "titel": "plaats 6",
        "image": "fotos/6.jpg",
        "directions":{
            "Oost": 2,
            
        }
    },
    { //pos 7 object
        "titel": "plaats 7",
        "image": "fotos/download.jpg",
        "directions":{
            "Noord": 8,
            "Oost": 3,
        }
    },
    { //pos 8 object
    "titel": "plaats 8",
    "image": "fotos/download(1).jpg",
    "directions":{
        "Oost": 3,
        "Zuid": 7,
        }
    },
    { //pos 9 object
        "titel": "plaats 9",
        "image": "fotos/rijksmuseum Schuttersmaaltijd ter viering van de Vrede van MunsterNC 700x290.jpg",
        "directions":{
            "West": 4,
        }
    },
]


function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index

    //knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    // haal de mogelijke directions op voor currunt_index
    let possible = locaties[current_index].directions;

    // zet de diretion key in een aparte variable
    let possible_keys = Object.keys(possible);

   
    // zet de keys van de buttons in een aparte variable
    let buttons_keys = Object.keys(directionButtons);
    

    // Zet eerst alle knoppen uit 
    for (const key of buttons_keys){
        directionButtons[key].style.visibility = "hidden";
    }
    for (const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    } 
    // Zet nu de mogelijke knoppen (directions) aan

}



function getInput(){
    show(myInput.value)
    myInput.value = "",
    myInput.focus();
}

function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting];
    console.log(current_index)
    show(punt_index);
}

show(0)
