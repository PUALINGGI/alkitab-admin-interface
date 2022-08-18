import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import KitabPage from "./pages/Kitab/kitab-page";
import KitabUpdate from './pages/Kitab/kitab-update';
import KitabCreate from './pages/Kitab/kitab-create';
import KitabHome from "./pages/Kitab/kitab-home";
import PerikopPage from "./pages/perikop-page";
import BacaanPage from "./pages/bacaan-page";

const App = ()=> {
  return (
    <>
      <header className="w-full">
        <Navigation />
      </header>
      <main className="w-full bg-stone-50 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kitab" element={<KitabPage />}>
              <Route index element={<KitabHome />} />
              <Route path="create" element={<KitabCreate />} />
              <Route path="update" element={<KitabUpdate />} />
            </Route>
            <Route path="/perikop" element={<PerikopPage />} />
            <Route path="/bacaan" element={<BacaanPage />} />
          </Routes>
      </main>
    </>
  )
}

export default App;
