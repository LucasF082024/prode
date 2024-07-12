import { useState } from "react";
import { Partidos } from "../../components/Partidos/Partidos";
import { Puntaje } from "../../components/Puntaje/Puntaje";
import { createUser, users } from "../../utils/procesarUsuario";


export const Home = ({ data, user }) => {
    const [value, setValue] = useState(0);
    return (
        <>
            <Puntaje value={value}/>
            <Partidos partidos={data} setValue={setValue} />
        </>
    )
}