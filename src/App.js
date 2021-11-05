import "./App.css"
import { AdvertsPage, AdvertDetailPage, NewAdvertPage} from "./components/adverts/"
import { LoginPage } from "./components/auth"

function App() {
  return (
    <>
      <LoginPage />
      <AdvertsPage />
      <NewAdvertPage />
      <AdvertDetailPage />
    </>
  )
}

export default App
