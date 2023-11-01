import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from '../../Components/Navbar'
import Home from '../Home'
import Contact from '../Contact'
import NotFound from '../NotFound'
import { CartContextProvider } from '../../Context'

//import CheckoutSideMenu from '../../Components/CheckoutSideMenu'



const AppRoutes = () => {
    let routes = useRoutes(
        [
            { path: '/home', element: <Home /> },
            { path: '/contacto', element: <Contact /> },
            { path: '/*', element: <NotFound /> }
        ]
    )
    return routes
}
function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />

            </BrowserRouter>
        </CartContextProvider>
    )
}
export default App