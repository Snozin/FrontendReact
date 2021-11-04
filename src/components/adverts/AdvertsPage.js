import { getAdverts } from "../services/dataService"
import { useEffect, useState } from "react"
import classNames from "classnames"

import "./AdvertsPage.css"

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([])
  useEffect(() => {
    // Forma equivalente a la de abajo.
    // then resuelve un único valor que le vamos a pasar a la función
    // getAdverts().then( data => setAdverts(data))
    getAdverts().then(setAdverts)
  }, [])
  return (
    // usando classNames para definir clases condicionalmente
    <div className={classNames("advertsPage", { secondClass: adverts.length })}>
      <ul>
        {adverts.map((advert) => (
          <li key={advert.id}>{advert.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default AdvertsPage
