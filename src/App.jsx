import  "./App";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from "./assets/pages/Home";
import Dashboard from "./assets/pages/Dashboard";
import PokemonDetail from "./assets/pages/PokemonDetail";


import ProtectedRoutes from "./assets/pages/ProtetedRoutes";
function App() {
  return (
    <HashRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:name" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

