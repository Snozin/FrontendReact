import "./App.css"
import AdvertDetailPage from "./components/adverts/AdvertDetailPage"
import AdvertsPage from "./components/adverts/AdvertsPage"
import NewAdverPage from "./components/adverts/NewAdvertPage"
// import Button from './components/commons/Button';

function App() {
  return (
    <>
      {/* <Button disabled> No toy</Button>
    <Button variant='primary'>Si toy</Button> */}
      <AdvertsPage />
      <NewAdverPage />
      <AdvertDetailPage />
    </>
  )
}

export default App
