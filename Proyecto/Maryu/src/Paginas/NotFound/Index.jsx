import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { useState, useEffect } from 'react'
import React from 'react'
import ProductDetail from '../../Components/ProductDetail'
function NotFound() {
    const [items, setItems] = useState(null)
    useEffect = (() => { 
        fetch('https://api.escuelajs.co/api/v1/products')
        .then (respuesta=> respuesta.json())
        .then (data => console.log(setItems(data)))
    })
    return (
        <>
            <Layout >
                <div className='font-extralight text-center'>PERFIL</div>
                <div className="flex flex-wrap m-10 gap-10">
                    
                    <Card />
                </div>
               <ProductDetail/>
            </Layout>

        </>
    )
}
export default NotFound