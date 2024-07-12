import { useBuscarInfo } from "../../hooks/useBuscarInfo"

const Predictions = () => {
  const {data} = useBuscarInfo()
  return (
    <>
            <Puntaje value={value}/>
            <Partidos partidos={data} setValue={setValue} />
        </>
  )
}

export default Predictions