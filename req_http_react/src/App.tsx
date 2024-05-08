import './App.scss';
import { useFetchDb } from './hooks/useFetchDb';

function App() {
  const { data } = useFetchDb('https://jsonplaceholder.typicode.com/products');
  console.log(data)

  return (
    <>
      <div>
       {data?.map((user) => (
         <p key={user.id}>{user.nome}</p>

         
       ))}
      </div>
    </>
  );
}

export default App;
