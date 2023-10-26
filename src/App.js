import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';
import MainPage from './main page/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        {/* <Route path='/sidebar' element={<Sidebar/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
