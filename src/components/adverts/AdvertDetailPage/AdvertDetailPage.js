import { useParams } from "react-router-dom"
import Layout from "../../layout/Layout"

const AdvertDetailPage = () => {
  const {advertId} = useParams()
  
  return <Layout title='Detalle de anuncio'>
    <div>
      Página de detallito {advertId}
    </div>
  </Layout>
}

export default AdvertDetailPage