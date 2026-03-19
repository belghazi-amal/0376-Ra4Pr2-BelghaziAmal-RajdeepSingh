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