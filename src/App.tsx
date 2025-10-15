import { useFetch } from './hooks/useFetch';
import { Button } from './components';

const url = 'https://api.escuelajs.co/api/v1/products';

function App() {
  const { data, error, loading } = useFetch(url);

  const handleClick = () => {
    console.log('My Button');
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>UPS! no se encontro nada</div>;
  }

  return (
    <>
      <Button
        label="My Button"
        parentMethod={handleClick}
      />
    </>
  );
}

export default App;
