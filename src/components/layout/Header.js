import classNames from "classnames"
import Button from "../commons/Button"

import './Header.css'
// Forma fancy de importar los SVG como un componente react
import {ReactComponent as Icon} from '../../assets/twitter.svg'

const Header = ({ className }) => {
  return (
    <header className={classNames("header", className)}>
      <div className="header-logo">
        {/* Uso del SVG importado */}
        <Icon width="32" height="32" />
      </div>
      <nav className="header-nav">
        <Button variant="primary" className="header-button" />
      </nav>
    </header>
  )
}

export default Header
