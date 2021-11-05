import { useState } from "react"
import "./App.css"
import {
  AdvertsPage,
  AdvertDetailPage,
  NewAdvertPage,
} from "./components/adverts/"
import { LoginPage } from "./components/auth"

function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged)
  const handleLogin = () => setIsLogged(true)
  return (
    <>
      {isLogged ? <AdvertsPage isLogged/> : <LoginPage onLogin={handleLogin} />}

      {/* <NewAdvertPage />
      <AdvertDetailPage /> */}
    </>
  )
}

export default App
