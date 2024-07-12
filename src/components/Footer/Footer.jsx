import {MEMBERS} from "../../constants/footer.constants";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Página creada por:</p>
        <ul>
            {
                MEMBERS.map((member, i)=>(
                    <li key={i}>{`${member.NAME} ${member.SURNAME}`}</li>
                ))
            }
        </ul>
    </footer>
  )
}

export default Footer