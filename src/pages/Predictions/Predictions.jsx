import { useBuscarInfo } from "../../hooks/useBuscarInfo"
import {Puntaje} from "../../components/Puntaje/Puntaje"
import {Partidos} from "../../components/Partidos/Partidos"

const Predictions = () => {
  const {data} = useBuscarInfo()
  return (
    <>
            <Puntaje/>
            <Partidos partidos={data} />
    </>
  )
}

export default Predictions