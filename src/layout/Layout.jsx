import { Outlet, Link, useLocation } from 'react-router-dom'

export const Layout = () => {
  const { pathname } = useLocation()

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/5 bg-blue-900 p-4">
        <h1
          className="text-2xl font-bold text-center text-white mb-5 md:mb-10"
          to="/clientes"
        >
          CRM - CLIENTES
        </h1>
        <nav>
          <Link
            className={`${
              pathname === '/clientes' ? 'text-blue-200' : 'text-white'
            } text-lg font-bold block hover:text-blue-200 mt-2`}
            to="/clientes "
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
              pathname === '/clientes/nuevo' ? 'text-blue-200' : 'text-white'
            } text-lg font-bold block hover:text-blue-200 mt-2`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="overflow-x-scroll md:w-4/5 p-4 h-screen md:overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}
