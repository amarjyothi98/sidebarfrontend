import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Sidebar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
