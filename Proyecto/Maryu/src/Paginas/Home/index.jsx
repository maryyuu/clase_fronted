import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
function Home() {
    return (
        
        <>
            <Layout >
                <div className='font-semibold text-center'>HOME</div>
                <div className="flex flex-wrap m-10 gap-10">
                    <div>HOLAAA</div>
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