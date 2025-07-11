import './App.css';
import MainDash from './assets/components/mainDash/MainDash';
import RightSide from './assets/components/RightSide/RightSide';
import Sidebar from './assets/components/Sidebar/Sidebar';
import { useState } from 'react';
import { UilBars } from '@iconscout/react-unicons';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App">
      {/* Toggle icon for mobile */}
      <div className="toggle-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <UilBars />
      </div>

      <div className={`AppGlass ${sidebarOpen ? 'open-sidebar' : ''}`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
