import { useParams } from 'react-router-dom'

export const VerCliente = () => {
  let { id } = useParams()

  console.log(id)

  return (
    <>
      <div>VerCliente</div>
      <h2>{id}</h2>
    </>
  )
}
