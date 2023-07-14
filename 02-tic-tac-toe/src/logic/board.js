import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
    // Chequeamos las combinaciones posibles ganadoras
    // para ver si X u O Gano
    for (const combo of WINNER_COMBOS){
        const [a,b,c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c] 
        ){
            return boardToCheck[a];
        }
    }
    // Si no hay ganador
    return null;
}

export const checkEndGame = (newBoard) => {
    /* 
        Revisamos si hay empate
        si no hya mas espacios vacios
        en el tablero
    */

    return newBoard.every((square) => square !== null);

}