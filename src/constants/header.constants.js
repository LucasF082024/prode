import {RUTAS} from "./routers.constants"
export const PAGE_TITLE = "Fake Prode"

export const NAV_LINKS = [
    {
        PATH: RUTAS.HOME,
        TEXT:"Inicio"
    },
    {
        PATH: `/${RUTAS.LOGIN}`,
        TEXT:"Iniciar Sesión"
    },
    {
        PATH: `/${RUTAS.REGISTER}`,
        TEXT:"Registrarse"
    },
    {
        PATH: `/${RUTAS.PREDICTIONS}`,
        TEXT:"Partidos"
    }
]