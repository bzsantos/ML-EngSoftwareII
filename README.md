
## 1. Instalação da biblioteca 
### No terminal do seu projeto, execute:

> npm install react-router-dom
> npm install react-icons

## 2. Configuração das rotas principais (no seu arquivo principal, geralmente App.tsx ou main.tsx)
### Você define qual componente corresponde a cada URL:

```

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './Index'; // seu componente index.tsx
import Sobre from './Sobre'; // seu componente sobre.tsx

export default function App() {
  return (
    <BrowserRouter>
      {/* Opcional: Um menu de navegação que aparece em todas as páginas */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
      </nav>

      {/* Configuração das páginas/módulos que serão trocados dinamicamente */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

```

### 3. Criando o link dentro da sua página (Index.tsx)
### Para ir da página inicial para a página "Sobre", importe o componente Link e use a propriedade to apontando para a rota configurada:

```

import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div>
      <h1>Esta é a página Inicial (Index)</h1>
      
      {/* Substitui a tag <a> para evitar o recarregamento da página */}
      <Link to="/sobre">Ir para a página Sobre</Link>
    </div>
  );
}

```
