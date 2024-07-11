import { useState } from "react";
import { Partidos } from "../../components/Partidos/Partidos";
import { Puntaje } from "../../components/Puntaje/Puntaje";

export const Home = ({ data }) => {
    const [value, setValue] = useState(0);
    return (
        <>
            <Puntaje value={value}/>
            <Partidos partidos={data} setValue={setValue} />
        </>
    )
}