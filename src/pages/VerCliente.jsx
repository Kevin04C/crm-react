import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '../components/Spinner'

export const VerCliente = () => {
  const [client, setClient] = useState({})
  const [loading, setLoading] = useState(false)

  let { id } = useParams()

  const getClient = async () => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:4000/clientes/${id}`)
      const json = await res.json()

      setClient(json)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getClient()
  }, [])

  return (
    <div>
      {Object.values(client).length === 0 ? (
        <h1>No existe información del cliente con el id: {id}</h1>
      ) : loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-3xl font-black text-indigo-900">
            Ver cliente: {client.nombre}
          </h1>
          <p className="text-xl mt-3">Información del Cliente</p>

          <p className="text-3xl text-gray-700 mt-10">
            <span className="uppercase font-bold">Cliente: </span>
            {client.nombre}
          </p>
          <p className="text-2xl text-gray-700">
            <span className="uppercase font-bold">Email: </span>
            {client.email}
          </p>
          <p className="text-2xl text-gray-700">
            <span className="uppercase font-bold">Telefono: </span>
            {client.telefono}
          </p>
          <p className="text-2xl text-gray-700">
            <span className="uppercase font-bold">Empresa: </span>
            {client.empresa}
          </p>
          {client.notas && (
            <p className="text-2xl text-gray-700">
              <span className="uppercase font-bold">Notas: </span>
              {client.notas}
            </p>
          )}
        </>
      )}
    </div>
  )
}
