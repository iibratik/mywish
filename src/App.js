//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/styles/main.sass";
import HomePage from './views/HomePage.jsx';
import MainList from './views/MainListPage'


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list/" element={<MainList />} />
        {/* Другие маршруты */}
      </Routes>
    </Router>


    </div>
  );
}

export default App;
