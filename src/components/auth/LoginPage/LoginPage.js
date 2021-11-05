import { useState } from "react"
import Button from "../../commons/Button"
import "./LoginPage.css"

import { login } from "../authDataService"
import { AuthContextConsumer } from "../context"

const LoginPage = ({ onLogin }) => {
  const [formValues, setFormValues] = useState({ username: "", password: "" })
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // Seteamos el valor inicial a null porque si algo es null react no renderiza
  const [error, setError] = useState(null)
  const resetError = () => setError(null)

  const [isLoading, setIsLoading] = useState(false)

  /**
   * Refactor para utilizar un único useState con un objeto que gestiona los
   * distintos campos.
   *
   * Al setear el nuevo estado, como depende del estado anterior se usará la
   * forma de función de setState(prevState => {newState})
   */

  // const handleUsernameChange = (event) => {
  // setUsername(event.target.value)
  // Usamos el spread operator para modificar únicamente la propiedad
  // que nos interesa y preservar el resto tal cual estaba
  //   setFormValues((prevState) => ({
  //     ...prevState,
  //     username: event.target.value,
  //   }))
  // }

  // const handlePasswordChange = (event) => {
  // setPassword(event.target.value)
  //   setFormValues((prevState) => ({
  //     ...prevState,
  //     password: event.target.value,
  //   }))
  // }

  const handleFormState = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      // Lo que pongamos entre los corchetes se evalúa como clave del objeto
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    resetError()
    try {
      await login(formValues)
      setIsLoading(false)
      onLogin()
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Login molón</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleFormState}
        />
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleFormState}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading || !formValues.username || !formValues.password}
        >
          Log in
        </Button>
      </form>
      {/* Renderizado condicional solo si error existe */}
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  )
}

// export default LoginPage

// Uso del contexto sin hook de useContext
const ConnectedLogin = () => (
  <AuthContextConsumer>
    {(auth) => <LoginPage onLogin={auth.handleLogin} />}
  </AuthContextConsumer>
)

export default ConnectedLogin
