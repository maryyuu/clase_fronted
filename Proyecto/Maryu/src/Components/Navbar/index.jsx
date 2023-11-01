import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from "../../Context"


const Navbar = () => {
    const context = useContext(CartContext)
    const activeStyle = 'underline underline-offset-4 '

    return (
        <nav className="flex justify-center items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-slate-400">
            <ul className="flex items-center gap-3"  >
                <li className="font-semibold text-lg gap-3 bg-black">
                    <NavLink to='/home'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/home'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Inicio
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/contacto'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Contacto
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/*'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Perfil
                    </NavLink>
                </li>
                <li>
                    { context.count }
                </li>
            </ul>
        </nav>
    )
}
export default Navbar