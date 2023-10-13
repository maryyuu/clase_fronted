import { useRoutes, BrowserRouter } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Home from '../Home'
import Contact from '../Contact'
import NotFound from '../NotFound'
import './App.css'


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
const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
            
            <Navbar />
            
        </BrowserRouter>
    )
}
export default App