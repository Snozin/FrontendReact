import { useState } from "react"
import Button from "../../commons/Button"
import "./LoginPage.css"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Login molón</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!username || !password}
        >
          Log in
        </Button>
      </form>
    </div>
  )
}

export default LoginPage
