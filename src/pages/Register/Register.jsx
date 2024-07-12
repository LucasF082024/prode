import '../../styles/form.css'
const Register = () => {
  return (
    <>
    <div id="formContenedor">
    <h1>Registro</h1>
      <form>
        <label htmlFor="nameUser">Usuario</label>
        <input type="text" id="nameUser" name="registerForm" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="registerForm" />

        <label htmlFor="repeatPassword">Confirme Contraseña</label>
        <input type="password" id="repeatPassword" name="registerForm" />
        <button type="submit" value="Submit">Registrarse</button>
      </form>
    </div>
    </>
  )
}

export default Register