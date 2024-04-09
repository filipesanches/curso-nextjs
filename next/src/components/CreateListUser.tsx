interface User {
  id: number;
  name: string;
  lastName: string;
  age: number;
}

const CreateListUser: React.FC<{ dataUser: User[] }> = ({ dataUser }) => {
  const CreateList = () => {
    return dataUser.map((user: User) => {
      return (
        <div key={user.id}>
          <p>
            ID: {user.id}
            <br />
            Nome: {user.name} {user.lastName}, Idade: {user.age}
          </p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <div><CreateList /></div>
    </div>
  );
};

export default CreateListUser;
