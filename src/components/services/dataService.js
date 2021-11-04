import client from "../../api/client"

const advertsBaseURL = "/api"

export const getAdverts = () => {
  const url = `${advertsBaseURL}/ads`
  return client.get(url)
}
