import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { AlertError } from './AlertError'
import { Spinner } from './Spinner'

export const Formulario = ({ client, loading }) => {
  const navigate = useNavigate()

  const newClientScheme = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    empresa: Yup.string().required('La empresa es requerido'),
    telefono: Yup.number()
      .integer('Télefono no válido')
      .required('El télefono es requerido')
      .typeError('Número no valido'),
    email: Yup.string()
      .email('Email no valido')
      .required('El email es requerido'),
    nota: '',
  })

  const initalValues = {
    nombre: client.nombre || '',
    empresa: client.empresa || '',
    email: client.email || '',
    telefono: client.telefono || '',
    nota: client.nota || '',
  }

  const handleSubmit = async (values) => {
    try {
      if (client.id) {
        const url = `http://localhost:4000/clientes/${client.id}`
        const res = await fetch(url, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw res
        navigate('/clientes', { replace: true })
      } else {
        const url = 'http://localhost:4000/clientes'
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw res
        navigate('/clientes', { replace: true })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white rounded mt-5 p-5 md:w-2/3 mx-auto">
          <h2 className="uppercase text-gray-600 font-bold text-2xl text-center mb-10">
            {client.nombre ? 'Actualizar Cliente' : 'Agregar cliente'}
          </h2>
          <div>
            <Formik
              initialValues={initalValues}
              enableReinitialize={true}
              onSubmit={(values) => {
                handleSubmit(values)
              }}
              validationSchema={newClientScheme}
            >
              {({ errors, touched }) => {
                return (
                  <Form>
                    <div>
                      <label
                        htmlFor="nombre"
                        className="text-gray-500 font-bold block mb-2"
                      >
                        Nombre
                      </label>
                      <Field
                        id="nombre"
                        name="nombre"
                        type="text"
                        className="block w-full bg-gray-50 p-2 mb-3"
                        placeholder="Nombre del cliente"
                        autoComplete="off"
                      />
                      {errors.nombre && touched.nombre ? (
                        <AlertError>{errors.nombre}</AlertError>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="empresa"
                        className="text-gray-500 font-bold block mb-2"
                      >
                        Empresa
                      </label>
                      <Field
                        id="empresa"
                        name="empresa"
                        type="text"
                        className="block w-full bg-gray-50  p-2 mb-3"
                        placeholder="Empresa del Cliente"
                        autoComplete="off"
                      />
                      {errors.empresa && touched.empresa ? (
                        <AlertError>{errors.empresa}</AlertError>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-gray-500 font-bold block mb-2"
                      >
                        E-mail
                      </label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        className="block w-full bg-gray-50 p-2 mb-3"
                        placeholder="Email del cliente"
                        autoComplete="off"
                      />
                      {errors.email && touched.email ? (
                        <AlertError>{errors.email}</AlertError>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="text-gray-500 font-bold block mb-2"
                      >
                        Telefono
                      </label>
                      <Field
                        id="telefono"
                        name="telefono"
                        type="tel"
                        className="block w-full bg-gray-50 p-2 mb-3"
                        placeholder="Telefono del cliente"
                        autoComplete="off"
                      />
                      {errors.telefono && touched.telefono ? (
                        <AlertError>{errors.telefono}</AlertError>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="nota"
                        className="text-gray-500 font-bold block mb-2"
                      >
                        Notas
                      </label>
                      <Field
                        id="nota"
                        as="textarea"
                        name="nota"
                        type="tel"
                        className="block w-full bg-gray-50 p-2 mb-3 h-36 resize-none"
                        placeholder="Nota del cliente"
                        autoComplete="off"
                      />
                    </div>
                    <input
                      type="submit"
                      className="w-full bg-blue-800 p-2 text-white text-xl font-bold cursor-pointer transition-all rounded hover:bg-blue-900"
                      value={
                        client.nombre ? 'Actualizar cliente' : 'Agregar Cliente'
                      }
                    />
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      )}
    </>
  )
}

Formulario.defaultProps = {
  client: {},
  id: null,
}
