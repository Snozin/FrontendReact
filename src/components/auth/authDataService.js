import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client"
import storage from "../../utils/storage"

export const login = (credentials) => {
  /**
   * La llamada al cliente axios devuelve una promesa. Al resolver esa promesa.
   * Al resolver la promesa correctamente obtenemos el token y se lo pasamos
   * a axios para que lo incluya en todas las peticiones siguientes
   */
  return client.post("/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken)
    storage.set("auth_token", accessToken)
  })
}

export const logout = () =>
// Eliminar la cabecera de las peticiones y borrar el local storage
  Promise.resolve().then(() => {
    removeAuthorizationHeader()
    storage.remove('auth_token')
  })
