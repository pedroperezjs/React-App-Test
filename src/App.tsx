import { useEffect, useState } from 'react';
import { Button } from './components';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      if (!response.ok) {
        throw new Error('Error al obtener datos');
      }
      const dataResponse = await response.json();
      setData(dataResponse);
    } catch (err) {
      setError(err as string);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
