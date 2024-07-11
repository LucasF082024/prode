import "./puntaje.css"
export const Puntaje = ({value=0}) => {

    
    return (
        <section>
            <h4>Puntos Totales:</h4>
            <p>{value}</p>
        </section>
    )
}