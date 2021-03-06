import { useNavigate } from 'react-router-dom'

export const Client = ({ id, nombre, email, empresa, telefono, nota, handleDelete }) => {
  let navigate = useNavigate()

  const handleEdit = () => {
    navigate(`editar/${id}`)
  }

  const handleSee = () => {
    navigate(`${id}`)
  }

  return (
    <tr className="border-b hover:bg-gray-50 ">
      <td className="p-2 text-center">{nombre}</td>
      <td className="p-2 text-center">
        <p>
          Email:{' '}
          <span className="text-gray-800 uppercase font-bold">{email}</span>
        </p>
        <p>
          Tel:{' '}
          <span className="text-gray-800 uppercase font-bold">{telefono}</span>
        </p>
      </td>
      <td className="p-2 text-center">{empresa}</td>
      <td className="p-2">
        <button
          type="button"
          className="bg-orange-500 text-white p-2 mr-1 rounded block w-full mb-2 text-sm hover:bg-orange-600"
          onClick={handleSee}
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-blue-800 text-white p-2 mr-1 rounded block w-full mb-2 text-sm hover:bg-blue-900"
          onClick={handleEdit}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-500 text-white p-2 mr-1 rounded block w-full text-sm hover:bg-red-700"
          onClick={() => handleDelete(id, nombre)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}
