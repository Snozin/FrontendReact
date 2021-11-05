import client, { setAuthorizationHeader } from "../../api/client"

export const login = (credentials) => {
  /**
   * La llamada al cliente axios devuelve una promesa. Al resolver esa promesa.
   * Al resolver la promesa correctamente obtenemos el token y se lo pasamos
   * a axios para que lo incluya en todas las peticiones siguientes
   */
  return client.post("/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken)
  })
}
