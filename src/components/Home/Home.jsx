import { useState } from "react";
import { Partidos } from "../../components/Partidos/Partidos";
import { Puntaje } from "../../components/Puntaje/Puntaje";

export const Home = ({ data }) => {
    return (
        <>
            <Puntaje/>
            <Partidos partidos={data} />
        </>
    )
}