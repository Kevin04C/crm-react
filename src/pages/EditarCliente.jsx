import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Formulario } from '../components/Form'

export const EditarCliente = () => {
  const [client, setClient] = useState({})
  const [loading, setLoading] = useState(false)

  const { id } = useParams()

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
    <>
      <h2 className="font-extrabold text-4xl text-blue-900 mb-2">
        Nuevo Cliente
      </h2>
      <p className="text-lg mb-4">
        Utiliza este formulario para editar a tu cliente
      </p>
      {client.nombre && <Formulario client={client} loading={loading} />}
    </>
  )
}
