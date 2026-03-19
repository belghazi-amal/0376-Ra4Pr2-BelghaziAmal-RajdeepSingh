
const MAX_INTENTS = 5;
let codiSecret = [];
let partidaAcabada = false;

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 4; i++) {
        codiSecret.push(Math.floor(Math.random() * 10));
    }
    logTerminal("Sistema inicialitzat. Introdueix el teu codi.");
});


function validarIntent(intent) {
    if (partidaAcabada) return [];

    const pistes = [];
    const secretUsats = [false, false, false, false];
    const intentUsats = [false, false, false, false];

   
    for (let i = 0; i < 4; i++) {
        if (intent[i] === codiSecret[i]) {
            pistes[i] = "1";
            secretUsats[i] = true;
            intentUsats[i] = true;
        }
    }

    
    for (let i = 0; i < 4; i++) {
        if (intentUsats[i]) continue;
        for (let j = 0; j < 4; j++) {
            if (!secretUsats[j] && intent[i] === codiSecret[j]) {
                pistes[i] = "Ø";
                secretUsats[j] = true;
                break;
            }
        }
        if (!pistes[i]) pistes[i] = "×";
    }

    
    if (pistes.every(p => p === "1")) {
        partidaAcabada = true;
        logTerminal("Has guanyat!", "success");
    } else if (rondesRestants <= 1) {
        partidaAcabada = true;
        logTerminal("Has perdut! El codi era: " + codiSecret.join(" "), "error");
    }

    return pistes;
}