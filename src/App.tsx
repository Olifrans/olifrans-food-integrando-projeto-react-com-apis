import { Routes, Route } from "react-router-dom";
import PaginaBaseAdmin from "./paginas/Administracao/PaginaBaseAdmin";
import AdminitracaoRestaurantes from "./paginas/Administracao/Restaurantes/AdminitracaoRestaurantes";
import FormularioRestaurantes from "./paginas/Administracao/Restaurantes/FormularioRestaurantes";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path="/admin" element={<PaginaBaseAdmin />}>
        <Route path="/restaurantes" element={<AdminitracaoRestaurantes />} />
        <Route path="/restaurantes/novo" element={<FormularioRestaurantes />} />
        <Route path="/restaurantes/:id" element={<FormularioRestaurantes />} />
      </Route>
    </Routes>
  );
}

export default App;
