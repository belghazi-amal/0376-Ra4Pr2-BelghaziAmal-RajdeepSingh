//Estudiant A: Generació de Selects: Crear un bucle que ompli els 4 desplegables amb números del 0 al 9.

document.addEventListener("DOMContentLoaded", () => {
    const selects = document.querySelectorAll(".code-input");

    selects.forEach(select => {
        for (let i = 0; i <=9; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
    });
});


//Estudiant A: Funció logTerminal(missatge, tipus): Crear una funció que rebi un text i el tipus (èxit, error o normal) i l'imprimeixi a la zona de terminal del HTML amb un efecte de "línia de comanda".

function logTerminal(missatge, tipus = "normal") {
    const terminal = document.getElementById("terminal");

    const linea = document.createElement("p");
    linea.textContent = `> ${missatge}`;

    linea.classList.add("line");

    if (tipus === "error") {
        linea.classList.add("error");
    } else if (tipus === "success") {
            linea.classList.add("success");
    }

    terminal.appendChild(linea);
    terminal.scrollTop = terminal.scrollHeight

}
//xeic quin pal deumeu, això no està pagao

//Estudiant A: Control de Rondes: Actualitzar el comptador visual de rondes restants a cada intent.
//me quiero ir a casa...

let rondesRestants = 5;

function actualitzarRondes() {
    rondesRestants--;
    
    const span = document.getElementById("rondes-restants");
    span.textContent = rondesRestants;

    if (rondesRestants <= 0) {
        logTerminal("FI DE PARTIDA", "error");
    }
}

//xeic quin pal deumeu, això no està pagao

//Estudiant A: Gestor d'Esdeveniments: Escoltar el clic del botó "Executar Codi", recollir els valors dels 4 selects i cridar a la lògica de comparació.
//bueno, anem a fer a això, lo veo complicao pero nem fent

document.getElementById("btn-enviar").addEventListener("click", () => {
    const selects = document.querySelectorAll(".code-input");

    const intent = [];

    selects.forEach(select => {
        intent.push(parseInt(select.value));
    });

    logTerminal(`Intent: ${intent.join(" ")}`);

    if (typeof validarIntent === "function") {
        const resultat = validarIntent(intent);
        logTerminal(`Resultat: ${resultat.join(" ")}`);
    } else {
        logTerminal("Engine no carregat", "error");
    }

    actualitzarRondes();

});