import { COINCIDENCIA_EXACTA,ADIVINAR_GANADOR,ADIVINAR_LADO } from "../constants/puntos"

const coincidenciaExacta = (partido, inpLocal,inpVisitor) =>{
    const [local,visitor]  = partido.score
    return (local.goals === inpLocal && visitor.goals === inpVisitor)  ? COINCIDENCIA_EXACTA : 0;
}
const coincidenciaLado = (partido, inpLocal,inpVisitor) =>{
  const [local,visitor]  = partido.score
  let total =0;
  local.goals === inpLocal ? 
    visitor.goals === inpVisitor ? total+=ADIVINAR_LADO*2  : total+=ADIVINAR_LADO 
    : visitor.goals === inpVisitor ? total+=ADIVINAR_LADO  : 0
  return total
}
const adivinaGanador = (partido, inpLocal,inpVisitor) =>{
  const [local,visitor]  = partido.score
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
  let puntaje=0;
  puntaje += coincidenciaLado(partido, inpLocal, inpVisitor);
  puntaje += adivinaGanador(partido, inpLocal, inpVisitor);
  puntaje += coincidenciaExacta(partido, inpLocal, inpVisitor);

  return puntaje;
}
