
import './App.css'
import MainDash from './assets/components/mainDash/MainDash'
import Sidebar from './assets/components/Sidebar/Sidebar'

function App() {


  return (
    <div className='App'>
<div className="AppGlass">
 <Sidebar/>
 <MainDash/>
  <Sidebar/>
</div>
    </div>
  )
}

export default App
