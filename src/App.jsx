
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Body from './Components/Body'
import RightBar from './Components/RightBar'

function App() {

  return (
    <>
     <Header/>
     <div className='flex'>
     <Sidebar/>
      <Body/>
      <RightBar/>
      </div>
    </>
  )
}

export default App
