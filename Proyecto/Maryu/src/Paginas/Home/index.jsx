import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { useState, useEffect } from 'react'
import React from 'react'

function Home ()  {
    //const items = null
    const [items, setItems] = useState(null)
    useEffect(() =>{
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(respuesta => respuesta.json())
        .then(data => setItems(data))
    })

    return (
        <>
            <Layout >
                <div className='font-extralight text-center'>HOME</div>
                <div className= 'grid gap-3 grid-cols-3 w-full max-w-screen-lg '>
                    {
                        items?.map(item => (
                            <Card key={item.id} data = {item}/>
                        ))
                    }
                </div>

            </Layout>
            
        </>

    )
}

export default Home