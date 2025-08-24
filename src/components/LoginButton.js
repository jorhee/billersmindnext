'use client';
import { useRouter } from 'next/navigation';

const LoginButton = () => {
  const router = useRouter();

  const handleNavigateToLogin = () => {
    router.push('/login');
  };

  return (
    <button
      onClick={handleNavigateToLogin}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition-all"
    >
      Login
    </button>
  );
};

export default LoginButton;
