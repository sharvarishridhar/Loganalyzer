import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";


import CSEPage from "./pages/CSEPage";
import ECEPage from "./pages/ECEPage";
import ISEPage from "./pages/ISEPage";
import CSDPage from "./pages/CSDPage";
import AIMLPage from "./pages/AIMLPage";
import CIVILPage from "./pages/CIVILPage";
import MECHPage from "./pages/MECHPage";


import Mechlab1 from "./pages/Mechlab1";
import Clab1 from "./pages/Clab1";
import Clab2 from "./pages/Clab2";
import Clab3 from "./pages/Clab3";
import Clab4 from "./pages/Clab4";
import Alab1 from "./pages/Alab1";
import Alab2 from "./pages/Alab2";
import Alab3 from "./pages/Alab3";
import Elab1 from "./pages/Elab1";
import Elab2 from "./pages/Elab2";
import Ilab1 from "./pages/Ilab1";
import Ilab2 from "./pages/Ilab2";
import Dlab1 from "./pages/Dlab1";
import Vlab1 from "./pages/Vlab1";
import Clab5 from "./pages/Clab5";


import Login from "./pages/Login";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/CSEPage" element={<CSEPage />}/>
          <Route path="/ECEPage" element={<ECEPage />}/>
          <Route path="/ISEPage" element={<ISEPage />}/>
          <Route path="/CSDPage" element={<CSDPage />}/>
          <Route path="/AIMLPage" element={<AIMLPage />}/>
          <Route path="/CIVILPage" element={<CIVILPage />}/>
          <Route path="/MECHPage" element={<MECHPage />}/>
          <Route path="/Mechlab1" element={<Mechlab1/>}/>
          <Route path="/Clab1" element={<Clab1 />} />
          <Route path="/Clab2" element={<Clab2/>} />
          <Route path="/Clab3" element={<Clab3 />} />
          <Route path="/Clab4" element={<Clab4 />} />
          <Route path="/Alab1" element={<Alab1 />} />
          <Route path="/Alab2" element={<Alab2 />} />
          <Route path="/Alab3" element={<Alab3 />} />
          <Route path="/Elab1" element={<Elab1 />} />
          <Route path="/Elab2" element={<Elab2 />} />
          <Route path="/Ilab1" element={<Ilab1 />} />
          <Route path="/Ilab2" element={<Ilab2 />} />
          <Route path="/Dlab1" element={<Dlab1 />} />
          <Route path="/Vlab1" element={<Vlab1 />} />
          <Route path="/Clab5" element={<Clab5 />} />
          <Route path="/Login" element={<Login />} />




        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
