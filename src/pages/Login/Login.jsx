import '../../styles/form.css'
import { USUARIOS } from '../Register/Register';
const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {user,pass} = Object.fromEntries(formData);
    console.log(USUARIOS);
    USUARIOS.map((usuario) => {
      if (usuario.name == user & usuario.password == pass){
        console.log("Bienvenido usuario");
      } else{
        console.log("Usuario incorrecto");
      }
    })


  }
  return (
    <>
    <div id="formContenedor">
    <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameUser">Usuario</label>
        <input type="text" id="nameUser" name="user" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="pass" />

        <button type="submit" value="Submit">Login</button>
      </form>
    </div>
    </>
  )
}

export default Login
