import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {PAGE_TITLE, NAV_LINKS} from "../../constants/header.constants";
import styles from "./header.module.css";


const Header = () => { 
    const location = useLocation();
    const navigate = useNavigate()

  return (
    <header className={styles.header}>
        <div className={styles.titleContainer}>
            <img src={logo} alt="" />
            <p className={styles.title}>{PAGE_TITLE}</p>
        </div>
        <nav className={styles.navBar}>
            <ul>
                {
                    NAV_LINKS.map((link, i)=>{
                        if (location.pathname === link.PATH) {
                            return
                        }
                        return <li onClick={()=>{
                            navigate(link.PATH)
                        }} key={i}>{link.TEXT}</li>
                    })
                }
            </ul>
        </nav>
    </header>
  )
}

export default Header