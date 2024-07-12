import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styles from "./layout.module.css";
const Layout = () => {
  return (
  <div className={styles.layout}>
    <Header/>
    <main className={styles.mainContent}>
    <Outlet/>
    </main>
    <Footer/>
  </div>
  )
}

export default Layout