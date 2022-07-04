import { Formulario } from '../components/Form'

export const NuevoCliente = () => {
  return (
    <>
      <h2 className="font-extrabold text-4xl text-blue-900 mb-2">
        Nuevo Cliente
      </h2>
      <p className="text-lg mb-4">
        Rellena los siguientes campos para registrar un nuevo cliente
      </p>
      <Formulario />
    </>
  )
}
