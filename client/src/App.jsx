import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';


function App() {


  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Dashboard />} />
        <Route path = "/stats" element = {<Statistics />} />
      </Routes>
    </Router>
  )
}

export default App
