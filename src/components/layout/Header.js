import classNames from "classnames"
import Button from "../commons/Button"

import './Header.css'

const Header = ({ className }) => {
  return (
    <header className={classNames("header", className)}>
      <div className="header-logo"></div>
      <nav className="header-nav">
        <Button variant="primary" className="header-button" />
      </nav>
    </header>
  )
}

export default Header
