import classNames from "classnames"
import Button from "../commons/Button"

// Forma fancy de importar los SVG como un componente react
import { ReactComponent as Icon } from "../../assets/twitter.svg"
import { useContext } from "react"
import "./Header.css"

import AuthContext from "../auth/context"
import { Link } from "react-router-dom"

const Header = ({ className }) => {
  // Ejemplo de uso del context consumer
  const { isLogged, handleLogout } = useContext(AuthContext)
  return (
    <header className={classNames("header", className)}>
      <div className="header-logo">
        <Link to="/">
          {/* Uso del SVG importado */}
          <Icon width="32" height="32" />
        </Link>
      </div>
      <nav className="header-nav">
        {isLogged ? (
          <Button className="header-button" onClick={handleLogout}>
            Log Out
          </Button>
        ) : (
          <Button
            variant="primary"
            className="header-button"
            as={Link}
            to="/login"
          >
            Log in
          </Button>
        )}
      </nav>
    </header>
  )
}

export default Header
