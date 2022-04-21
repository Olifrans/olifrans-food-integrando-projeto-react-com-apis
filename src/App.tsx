import { Routes, Route } from 'react-router-dom';
import AdminitracaoRestaurantes from './paginas/Administracao/Restaurantes/AdminitracaoRestaurantes';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdminitracaoRestaurantes />} />
    </Routes>
  );
}

export default App;
