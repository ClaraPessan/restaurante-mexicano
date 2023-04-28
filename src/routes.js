import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio";
import SobreNos from "./pages/SobreNos";
import NossasOpcoes from "./pages/NossasOpcoes";
import Cabecalho from './componentes/Cabecalho';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho/>
      <Routes>   
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobreNos" element={<SobreNos/>}/>
          <Route path="/nossasOpcoes" element={<NossasOpcoes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

