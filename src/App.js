import { useState } from "react"
import "./App.css"
import {
  AdvertsPage,
  AdvertDetailPage,
  NewAdvertPage,
} from "./components/adverts/"
import { LoginPage } from "./components/auth"
import { logout } from "./components/auth/authDataService"

import { AuthContextProvider } from "./components/auth/context"

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged)
  const handleLogin = () => setIsLogged(true)
  const handleLogout = async () => {
    await logout()
    setIsLogged(false)
  }
  return (
    <AuthContextProvider value={{ handleLogin, handleLogout, isLogged }}>
      <>
        {isLogged ? (
          <AdvertsPage />
        ) : (
          <LoginPage />
        )}

        {/* <NewAdvertPage />
      <AdvertDetailPage /> */}
      </>
    </AuthContextProvider>
  )
}

export default App
