import { useState } from "react"
import "./App.css"
import {
  AdvertsPage,
  AdvertDetailPage,
  NewAdvertPage,
} from "./components/adverts/"
import { LoginPage } from "./components/auth"
import { logout } from "./components/auth/authDataService"

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged)
  const handleLogin = () => setIsLogged(true)
  const handleLogout = async () => {
    await logout()
    setIsLogged(false)
  }
  return (
    <>
      {isLogged ? (
        <AdvertsPage isLogged onLogout={handleLogout}/>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}

      {/* <NewAdvertPage />
      <AdvertDetailPage /> */}
    </>
  )
}

export default App
