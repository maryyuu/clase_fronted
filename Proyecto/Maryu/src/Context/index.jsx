import { createContext, useState, } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [count, setCount] = useState(0) 



    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false) // state for cart product detail 
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false) // state for cart product detail 
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)


    const [productToShow, setProductToShow] = useState({})

    
    const [cartProducts, setCartProducts] = useState([])


    return (
        <CartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts, setCartProducts,
            isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
        }}>
            {children}
        </CartContext.Provider>
    )
}
