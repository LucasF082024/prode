export const formatearPartidos = (equipos, partidos)=>{
  const partidosFormateados = 
  partidos.map(partido =>{
      const matches = partido.score.map( side =>{
          const equipo = equipos.filter(equipo=> equipo.id === side.team)
          
          return {
            ...side,
            flag: equipo[0].flag,
            name:  equipo[0].name,
          }

      })
      const {score, ...extra} = partido;
      return {
        score: matches,
        ...extra
      }
  })
  return partidosFormateados
}