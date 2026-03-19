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
//xeic quin pal deumeu, això no està pagao

