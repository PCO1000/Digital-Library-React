import Background from '../assets/images/homelib.jpg'

function Home() {
  return (
    <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
        >
            <div className='flex place-items-center h-screen'>
                <h3 className='p-5 text-5xl bg-blue-200  text-black rounded'>
                    Welcome to Elite Digital Library
                </h3>
            </div>
    </div>
  )
}

export default Home
