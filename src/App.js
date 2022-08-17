import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import KitabPage from "./pages/kitab-page";
import PerikopPage from "./pages/perikop-page";
import BacaanPage from "./pages/bacaan-page";

const App = ()=> {
  return (
    <>
      <header className="w-full">
        <Navigation />
      </header>
      <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kitab" element={<KitabPage />} />
            <Route path="/perikop" element={<PerikopPage />} />
            <Route path="/bacaan" element={<BacaanPage />} />
          </Routes>
      </main>
    </>
  )
}

export default App;
