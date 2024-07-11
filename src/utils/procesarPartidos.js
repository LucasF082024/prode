import { COINCIDENCIA_EXACTA,ADIVINAR_GANADOR,ADIVINAR_LADO } from "../constants/puntos"

const coincidenciaExacta = (score, inpLocal,inpVisitor) =>{
    const [local,visitor]  = score
    return (local.goals === inpLocal && visitor.goals === inpVisitor)  ? COINCIDENCIA_EXACTA : 0;
}
const coincidenciaLado = (score, inpLocal,inpVisitor) =>{
  const [local,visitor]  = score
  let total =0;
  local.goals === inpLocal ? 
    visitor.goals === inpVisitor ? total+=ADIVINAR_LADO*2  : total+=ADIVINAR_LADO 
    : visitor.goals === inpVisitor ? total+=ADIVINAR_LADO  : 0
  return total
}
const adivinaGanador = (score, inpLocal,inpVisitor) =>{
  const [local,visitor]  = score
  let ganador = {}

  if(local.goals > visitor.goals){
    ganador = local;
  }else{
    ganador = visitor;
  }
  return ganador.side === "visitor" ?  ganador.goals=== inpVisitor ? ADIVINAR_GANADOR : 0 
  : ganador.goals === inpLocal ? ADIVINAR_GANADOR : 0  
}

export const calcularPuntaje = (partido, inpLocal, inpVisitor)=>{
  const {score, penalties} = partido;
  let puntaje=0;
  if (typeof inpLocal !== "number" || typeof inpVisitor !== "number") throw new Error ("Surgio un error con los valores ingresados")
  
  if (partido.penalties) {
    puntaje += coincidenciaLado(penalties, inpLocal, inpVisitor);
    puntaje += adivinaGanador(penalties, inpLocal, inpVisitor);
    puntaje += coincidenciaExacta(penalties, inpLocal, inpVisitor);
    return puntaje;
  }
  
  
  puntaje += coincidenciaLado(score, inpLocal, inpVisitor);
  puntaje += adivinaGanador(score, inpLocal, inpVisitor);
  puntaje += coincidenciaExacta(score, inpLocal, inpVisitor);

  return puntaje;
}
