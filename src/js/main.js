// Body
let body = document.body;
let script = document.querySelectorAll("script")[0];



let divGlobe = document.createElement("div");
divGlobe.setAttribute("id", "globe");
body.insertBefore(divGlobe, script);

// Titre
let monTitre = document.createElement("h1");
monTitre.textContent = "Houssein calculatrice";
monTitre.setAttribute("id" , "monH1");
body.insertBefore(monTitre, divGlobe);


// Partie Haute
let inputEcran = document.createElement("input");
inputEcran.setAttribute("id", "haut");
inputEcran.placeholder = 0;
divGlobe.appendChild(inputEcran);

// Contenu
let divBtn = document.createElement("div");
divBtn.setAttribute("id", "btn");
divGlobe.appendChild(divBtn);

let tabBut = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "0", "-", "x", "/",  "C", "="];

tabBut.forEach(elem => {

    let button = document.createElement("button");
    button.textContent = elem;
    divBtn.appendChild(button);

});


let input1 = "";
let operateur = "";
let input2 = "";
let mesButtons = Array.from(document.querySelectorAll("button"));
let reCompt = 0;


// addEventListener
mesButtons.forEach(ele => {
    ele.addEventListener("click", (e) => {
        if (input1 != "" && input2 != "" && operateur != "" && e.target.textContent == "=") {
            inputEcran.value = "";

            switch (operateur) {
                case "+":
                    inputEcran.value = parseInt(input1) + parseInt(input2);
                    break;

                case "-":
                    inputEcran.value = parseInt(input1) - parseInt(input2);
                    break;

                case "x":
                    inputEcran.value = parseInt(input1) * parseInt(input2);
                    break;

                case "*":
                    inputEcran.value = parseInt(input1) * parseInt(input2);
                    break

                case "/":
                    inputEcran.value = parseInt(input1) / parseInt(input2);
                    break;

                default:
                    break;
            }

        }else if (e.target.textContent == "C") {

            input1 = "";
            operateur = "";
            input2 = "";
            inputEcran.value = "";
            reCompt = 0;

        }else if (input1 != "" && operateur != "" && (e.target.textContent != "+" && e.target.textContent != "-" && e.target.textContent != "x" && e.target.textContent != "*" && e.target.textContent != "/")) {

            while (reCompt < 1) {

                inputEcran.value = "";
                reCompt++;

            }

            inputEcran.value += e.target.textContent;
            input2 = inputEcran.value;

        }else if(input1 != "" && (e.target.textContent == "+" || e.target.textContent == "-" || e.target.textContent == "x" || e.key == "*" || e.target.textContent == "/")){

            inputEcran.value = "";
            inputEcran.value += e.target.textContent;
            operateur = inputEcran.value;

        }else{

            inputEcran.value += e.target.textContent;
            input1 = inputEcran.value;

        }
        
    });
});

window.addEventListener("keydown" , (e) => {

    if (input1 != "" && input2 != "" && operateur != "" && e.key == "=") {
        inputEcran.value = "";

        switch (operateur) {

            case "+":
                inputEcran.value = parseInt(input1) + parseInt(input2);
                break;

            case "-":
                inputEcran.value = parseInt(input1) - parseInt(input2);
                break;

            case "x":
                inputEcran.value = parseInt(input1) * parseInt(input2);
                break;

            case "*":
                inputEcran.value = parseInt(input1) * parseInt(input2);
                break;

            case "/":
                inputEcran.value = parseInt(input1) / parseInt(input2);
                break;

            default:
                break;

        }

    }else if (e.key == "c") {

        input1 = "";
        operateur = "";
        input2 = "";

        inputEcran.value = "";
        reCompt = 0;

    }else if (input1 != "" && input2 != "" && operateur != "" && e.key == "Enter"){

        switch (operateur) {

            case "+":
                inputEcran.value = parseInt(input1) + parseInt(input2);
                break;

            case "-":
                inputEcran.value = parseInt(input1) - parseInt(input2);
                break;

            case "x":
                inputEcran.value = parseInt(input1) * parseInt(input2);
                break;

            case "*":
                inputEcran.value = parseInt(input1) * parseInt(input2);
                break;

            case "/":
                inputEcran.value = parseInt(input1) / parseInt(input2);
                break;

            default:
                break;

        }        

    } else if (input1 != "" && operateur != "" && (e.key != "+" && e.key != "-" && e.key != "x" && e.key != "*" && e.key != "/")) {
        
        while (reCompt < 1) {

            inputEcran.value = "";
            reCompt++;

        }

        inputEcran.value += e.key;
        input2 = inputEcran.value;

    }else if (input1 != "" && (e.key == "+" || e.key == "-" || e.key == "x" || e.key == "*" || e.key == "/")) {

        inputEcran.value = "";
        inputEcran.value += e.key;
        operateur = inputEcran.value;

    }else{

        inputEcran.value += e.key;
        input1 = inputEcran.value;

    }
});


// En cas d'erreur d'encodage 
window.addEventListener("error", (e) => {
    alert(`Une erreur est survenue dans votre calcul: ` + e.message)
});