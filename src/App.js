import { useState } from "react"
import "./App.css"
import {
  AdvertsPage,
  AdvertDetailPage,
  NewAdvertPage,
} from "./components/adverts/"
import { LoginPage } from "./components/auth"

function App() {
  const [isLogged, setIsLogged] = useState(false)
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
