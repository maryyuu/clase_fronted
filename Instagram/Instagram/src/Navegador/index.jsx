import { NavLink } from "react-router-dom"

const navegador = () => { 
    const activeStyle = 'underline underline-offset-4'
    return (
        
        <nav>
            <ul>
                <li clasaName="bg-black">
                    <NavLink to='/imgur'
                        clasaName={({ esactivo }) => esactivo ? activeStyle : undefined}>
                        Imgur
                    </NavLink>
                </li>
                <li>
                    <NavLink to= 'newpost'
                        clasaName={({ esactivo }) => esactivo ? activeStyle : undefined}>
                        <button type=""><img src="" alt="" />NEW POST</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to = 'barra'
                        clasaName={({ esactivo }) => esactivo ? activeStyle : undefined}>
                        <nav>
                            <p> Images, #tgas, @user oh my!</p>
                            <img src="" alt="" />
                        </nav>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        clasaName={({esactivo})=> esactivo? activeStyle:undefined}>
                        <button type="">Go Ad-Free</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        clasaName={({ esactivo }) => esactivo ? activeStyle : undefined}>
                        <button type="">Sign Up</button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}
export default navegador;