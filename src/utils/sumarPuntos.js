import { COINCIDENCIA_EXACTA,ADIVINAR_GANADOR,ADIVINAR_LADO } from "../constants/puntos"

const sumarPuntos = (partido,glu,gvu) => {
    const [local,visitor] = partido.score

    let gu = local.goals
    let gv = visitor.goals
    let puntosPartidos = 0
    //SI ADIVINA UN LADO
    if (gl === glu) puntosPartidos += ADIVINAR_LADO
    if (gv === gvu) puntosPartidos += ADIVINAR_LADO

    // SI EMPATAN
    if (glu === gvu){
        if (!partido.stage.includes("Group") && partido.penalties){

        }
    }
    
    // SI HAY COINCIDENCIA EXACTA
    if (gl === glu && gv === gvu) puntosPartidos+= COINCIDENCIA_EXACTA

    return puntosPartidos
}