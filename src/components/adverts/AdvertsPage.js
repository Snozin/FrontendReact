import { getAdverts } from "../services/dataService"
import { useEffect, useState } from "react"
import classNames from "classnames"

// import "./AdvertsPage.css"
/**
 * Module CSS genera una clase con un hash único que evita conflictos.
 * Para usarlo, lo importamos como un objeto y se pasa la propiedad del objeto
 * importado directamente al atributo className de react.
 * 
 * También puede combinarse con el la libreria classnames para generar clases
 * condicionales
 */
import styles from "./AdvertsPage.module.css"
// console.log(styles)

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
    // <div className={classNames("advertsPage", { secondClass: adverts.length })}>

    <div className={classNames(styles.advertsPage) }>
      <ul>
        {adverts.map((advert) => (
          // Ejemplo simple de module css
          <li className={styles.item} key={advert.id}>{advert.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default AdvertsPage
