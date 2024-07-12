import '../../styles/form.css'
const Login = () => {
  return (
    <>
    <div id="formContenedor">
    <h1>Login</h1>
      <form>
        <label htmlFor="nameUser">Usuario</label>
        <input type="text" id="nameUser" name="loginForm" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="loginForm" />

        <button type="submit" value="Submit">Login</button>
      </form>
    </div>
    </>
  )
}

export default Login
