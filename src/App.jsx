import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataViz from './pages/DataViz/DataViz';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/DataViz" element={<DataViz/>}/>
        <Route path="/Info" element={<Info/>}/>
        <Route path="*" element={<NotFound/>} />

      </Routes>
    
  );
} 

export default App;
