import { COINCIDENCIA_EXACTA,ADIVINAR_GANADOR,ADIVINAR_LADO } from "../constants/puntos"
const partido = {
    id:1,
    stage:"final",
    score:[
      {
        team:"id",
        name:"arg",
        goals:2,
        flag:"jeje",
        side:"local"
      },
      {
        name:"colombia",
        goals:0,
        side:"visit",
        flag:"ee"
 
      }
    ],
    penalties:null,
    stadium:3,
  }
const coincidenciaExacta = (inpLocal,inpVisitor) =>{
    const [local,visitor]  = partido.score
    if (local.goals === inpLocal && visitor.goals === inpVisitor)
    return COINCIDENCIA_EXACTA;
}

console.log(coincidenciaExacta(2,0));