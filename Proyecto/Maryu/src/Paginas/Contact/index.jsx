import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
function Contact() { 
    return (
        <>
            <Layout >
                <div className='font-extralight text-center'>hola desde home</div>
                <div className="flex flex-wrap m-10 gap-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </Layout>

        </>
    )
}

export default Contact