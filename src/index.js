import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import storage from "./utils/storage"
import { setAuthorizationHeader } from "./api/client"

const accessToken = storage.get("auth_token")
setAuthorizationHeader(accessToken)

ReactDOM.render(
  <React.StrictMode>
    <App isInitiallyLogged={!!accessToken} />
  </React.StrictMode>,
  document.getElementById("root")
)
