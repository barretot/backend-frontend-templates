# 🧪 Quick Notes – Frontend (React + Vite + Tailwind + ShadCN)

Feito com:

- React + Vite
- Tailwind CSS
- ShadCN UI (componentes acessíveis e prontos)
- React Router (para navegação SPA)

---

## ▶️ Como rodar o projeto localmente

### 1. Instale as dependências:

```bash
npm install
````

### 2. Rode o projeto:

```bash
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 📁 Estrutura de Pastas

```
src/
├── components/         # Componentes reutilizáveis
│   └── ui/             # Componentes do ShadCN
├── features/           # Lógicas e componentes por funcionalidade
├── hooks/              # Hooks customizados
├── lib/                # Funções utilitárias
├── pages/              # Páginas/rotas (Home, Login, Dashboard...)
├── routes/             # Definição das rotas (index.tsx)
├── styles/             # Arquivos de estilo (ex: tailwind base)
└── App.tsx             # Componente principal
```

---

## 🧩 Como criar um componente com ShadCN

### 1. Gere o componente via CLI:

```bash
npx shadcn@latest add button
```

Isso vai criar em:

```
src/components/ui/button.tsx
```

### 2. Usando o componente:

```tsx
import { Button } from '@/components/ui/button';

<Button variant="default">Salvar</Button>
<Button variant="secondary">Cancelar</Button>
```

Você pode modificar ou criar novos arquivos dentro de `src/components/ui`.

---

## 🧭 Como criar uma nova rota (página)

### 1. Crie a nova página em `src/pages/`

Exemplo: `src/pages/About.tsx`

```tsx
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const About = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-800">About</h1>

      <Button onClick={goToAbout} size="lg">
        Ir para Sobre
      </Button>
    </div>
  );
};

export default About;

```

---

### 2. Registre a nova rota em `src/routes/index.tsx`

```tsx
import About from '@/pages/About';

<Routes>
  <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login />} />
  <Route path="/about" element={<About />} /> <!-- 👈 Adicione aqui -->
</Routes>
```

---

### 3. Navegue para a nova página

Você pode usar:

```tsx
import { Link } from 'react-router-dom';

<Link to="/about">Ir para Sobre</Link>
```

Ou programaticamente:

```tsx
const navigate = useNavigate();
navigate('/about');
```

---

## ✨ Dicas

* Para criar um formulário, use os componentes `input`, `label`, `form` do ShadCN:

  ```bash
  npx shadcn@latest add input
  npx shadcn@latest add label
  ```

* Para aplicar dark mode, basta envolver seu `html` com a classe `dark`.

* Use os componentes do ShadCN como base e adapte conforme seu design.

---

## ✅ Requisitos

* Node.js 18+
* Vite 5+
* Tailwind CSS 4
* TypeScript

---

## 📌 Créditos

Este projeto usa [ShadCN UI](https://ui.shadcn.com) para a base visual e design acessível.