import { useUser } from '@auth0/nextjs-auth0';

export default function App() {
  const { user } = useUser();

  return (
    <div>
      <h1>{user?.name || 'Unauthorized'}</h1>
    </div>
  );
}
