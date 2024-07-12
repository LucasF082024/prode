import styles from "./home.module.css";
import {PAGE_TITLE} from "../../constants/header.constants"
import { useNavigate } from "react-router-dom";
import { RUTAS } from "../../constants/routers.constants";
const Home = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.home}>
            <div className={styles.cover}>
                <p>{`¡Predecí los resultados de la copa con ${PAGE_TITLE}!`}</p>
                <div className={styles.buttons}>
                    <button onClick={()=>{navigate(`/${RUTAS.LOGIN}`)}}>Iniciar Sesión</button>
                    <button  onClick={()=>{navigate(`/${RUTAS.REGISTER}`)}}>Registrarse</button>
                </div>
            </div>
           
        </section>
    )
}
export default Home;