import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './Principal.tsx'
import Produtos from './Produtos.tsx'; 

function App() {
  

  return (    
    <BrowserRouter>    

      {/* Configuração das páginas/módulos que serão trocados dinamicamente */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App
