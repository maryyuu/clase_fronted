import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
function Home() {
    return (
        
        <>
            <Layout >
                <div className='font-extralight text-center'>HOME</div>
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

export default Home