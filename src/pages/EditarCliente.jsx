import { useParams } from 'react-router-dom'

export const EditarCliente = () => {
  const {id} = useParams()

  return <div>Usuario con el id {id}</div>
}
