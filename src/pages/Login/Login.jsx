const Login = () => {
  return (
    <>
    <h1>Login</h1>
    <div id="formContenedor">
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
