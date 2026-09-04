
## 1. Instalação da biblioteca 
### No terminal do seu projeto, execute:

> npm install react-router-dom <br>
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

### Problemas com commit

```

Opção 1: Fazer um Merge (Padrão mais seguro)
Junta as alterações do GitHub com as suas criando um commit de mesclagem:

Bash
> git pull --no-rebase origin main
(Se preferir definir isso como padrão para não perguntar mais: git config pull.rebase false)

Opção 2: Fazer um Rebase (Deixa o histórico linear)
Coloca os seus commits locais na frente dos commits que vieram do GitHub:

Bash
> git pull --rebase origin main
(Se preferir definir isso como padrão: git config pull.rebase true)

Opção 3: Se você não alterou nada localmente importante
Se você só quer baixar a versão do GitHub e descartar/ignorar qualquer conflito local (cuidado para não perder códigos importantes):

Bash
> git pull --ff-only origin main
Após rodar uma das opções acima (geralmente a Opção 1 ou 2 resolvem), o seu repositório estará sincronizado e você poderá dar o seu git push normalmente.

```
