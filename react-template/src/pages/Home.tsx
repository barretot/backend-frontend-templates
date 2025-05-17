import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const Home = () => {
  const navigate = useNavigate();

  const irParaLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-800">Página Inicial</h1>

      <Button onClick={irParaLogin} size="lg">
        Ir para Login
      </Button>
    </div>
  );
};

export default Home;
