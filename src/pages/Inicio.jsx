import { useEffect, useState } from 'react'
import { Client } from '../components/Client'
import { Spinner } from '../components/Spinner'

export const Inicio = () => {
  const [clients, setClients] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getClientes = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('http://localhost:4000/clientes')
      const data = await res.json()
      setClients(data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id, name) => {
    const res = confirm(`¿Seguro que desea eliminar a ${name}?`)

    if (res) {
      try {
        const res = await fetch(`http://localhost:4000/clientes/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
          },
        })
        if (!res.ok) throw res

        await res.json()
        const newClients = clients.filter((client) => client.id != id)
        setClients(newClients)
      } catch (err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    getClientes()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-black text-indigo-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      {isLoading ? (
        <Spinner />
      ) : (
        <table className="w-full mt-5 table-auto shadow bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Empresa</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <Client key={client.id} {...client} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
