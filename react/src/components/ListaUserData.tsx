import React from "react";

interface User {
  id: number;
  nome: string;
  sobrenome: string;
}

const ListaUserData: React.FC<{ data: User[]}> = ({ data }) => {
  console.log(data);

  const renderUsers = () => {
    return data.map((user: User) => (
      <div key={user.id}>
        <p>
          ID: {user.id}<br />Nome: {user.nome} {user.sobrenome}
        </p>
      </div>
    ));
  };

  return (
    <>
      <h1>Lista de Usuários</h1>
      <div>{renderUsers()}</div>
    </>
  );
};

export default ListaUserData;
