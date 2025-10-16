import { useFetch } from './hooks/useFetch';
import { Button, ChildrenButton, CustomButton } from './components';
import { GlobalProvider } from './context/global.context';

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
    <GlobalProvider>
      <Button
        label="My Button"
        parentMethod={handleClick}
      />
      <CustomButton parentMethod={handleClick}>
        <ChildrenButton>
          <div>My Custom button</div>
        </ChildrenButton>
      </CustomButton>
    </GlobalProvider>
  );
}

export default App;
