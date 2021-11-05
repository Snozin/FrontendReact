import { useState } from "react"
import Button from "../../commons/Button"
import "./LoginPage.css"

import { login } from "../authDataService"

const LoginPage = () => {
  const [formValues, setFormValues] = useState({ username: "", password: "" })
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")

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

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event)
    login(formValues)
  }
 
  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Login molón</h1>
      <form
        onSubmit={handleSubmit}
      >
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
          disabled={!formValues.username || !formValues.password}
        >
          Log in
        </Button>
      </form>
    </div>
  )
}

export default LoginPage
