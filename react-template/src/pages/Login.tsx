import { useNavigate } from 'react-router-dom';

import { Button } from '../components/ui/button';

const Login = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-blue-300">
      <h1 className="text-3xl font-bold text-blue-800">Página de Login</h1>

      <Button onClick={goHome}>Ir para home</Button>
    </div>
  );
};

export default Login;
