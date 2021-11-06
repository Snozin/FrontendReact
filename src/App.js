import { useState } from "react"
import "./App.css"
import {
  AdvertsPage,
  AdvertDetailPage,
  NewAdvertPage,
} from "./components/adverts/"
import { LoginPage, PrivateRoute } from "./components/auth"
import { logout } from "./components/auth/authDataService"

import { AuthContextProvider } from "./components/auth/context"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged)
  const handleLogin = () => setIsLogged(true)
  const handleLogout = async () => {
    await logout()
    setIsLogged(false)
  }
  return (
    <Router>
      <AuthContextProvider value={{ handleLogin, handleLogout, isLogged }}>
        <>
          <Routes>
            <Route path="/login" element={ isLogged ? <Navigate to='/ads'/> : <LoginPage />} />
            <Route path="/ads" element={<AdvertsPage />} />
            <Route
              path="/ads/:advertId"
              element={<AdvertDetailPage cosa={3} />}
            />
            <PrivateRoute path="/ads/new" element={<NewAdvertPage />} />
            <Route path="/" element={<Navigate to="/ads" />} />

            {/* Esta ruta especial solo hace match cuando nada más lo hace */}
            <Route
              path="*"
              element={
                <main>
                  <h2>Oops!</h2>
                  <p>No hay nada por aquí!!</p>
                </main>
              }
            />
          </Routes>
          {/* {isLogged ? <AdvertsPage /> : <LoginPage />} */}

          {/* >
           */}
        </>
      </AuthContextProvider>
    </Router>
  )
}

export default App
