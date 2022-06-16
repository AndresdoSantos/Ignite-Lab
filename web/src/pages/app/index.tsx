import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function App() {
  const { user } = useUser();

  return (
    <div>
      <h1>{user?.name || 'Unauthorized'}</h1>

      <a href="api/auth/logout">logout</a>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
