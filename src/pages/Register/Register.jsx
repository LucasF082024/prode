import { useNavigate } from 'react-router-dom';
import '../../styles/form.css'
import { validarContraseña } from '../../utils/validarFormulario';
import { RUTAS } from '../../constants/routers.constants';

export const USUARIOS = []
const Register = () => {
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {user,pass,repeatpass} = Object.fromEntries(formData);
    if (validarContraseña(pass,repeatpass)) {
      USUARIOS.push({name:user,password:pass})
      navigate(`/${RUTAS.LOGIN}`);
    } else{
      console.log("not ok");
    }
  }
  return (
    <>
    <div id="formContenedor">
    <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameUser">Usuario</label>
        <input type="text" id="nameUser" name="user" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="pass" />

        <label htmlFor="repeatPassword">Confirme Contraseña</label>
        <input type="password" id="repeatPassword" name="repeatpass" />
        <button type="submit" value="Submit">Registrarse</button>
      </form>
    </div>
    </>
  )
}

export default Register