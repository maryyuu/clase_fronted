import { NavLink } from "react-router-dom"
const Navbar = () => {
    const activeStyle = 'underline underline--offset-4'
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg gap-3">
                <NavLink to='/'>
                    className={({ isActive }) => isActive ? activeStyle : undefinded}>
                    Maryu
                    </NavLink>
                </li>
                <li>
                    <Narvbar to='/home'
                        className={({isActive})=> isActive ? activeStyle :undefined }
                    >
                        Inicio
                    </Narvbar>
                </li>

                <li>
                    <Narvbar to='/contacto'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Contacto
                    </Narvbar>
                </li>

                <li>
                    <Narvbar to='/*'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Not Found
                    </Narvbar>
                </li>
            </ul>
        </nav>)

} 
export default Navbar