import { useUser } from '@auth0/nextjs-auth0';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <h1>Hello World</h1>

      <a href="/api/auth/login">Login</a>
    </div>
  );
};

export default Home;
