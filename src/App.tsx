import { Routes, Route } from 'react-router-dom';
import AdminitracaoRestaurantes from './paginas/Administracao/Restaurantes/AdminitracaoRestaurantes';
import FormularioRestaurantes from './paginas/Administracao/Restaurantes/FormularioRestaurantes';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdminitracaoRestaurantes />} />
      <Route path="/admin/restaurantes/novo" element={<FormularioRestaurantes />} />
      <Route path="/admin/restaurantes/:id" element={<FormularioRestaurantes />} />
    </Routes>
  );
}

export default App;
