// 'use client'
// const msgDias = [
//   {
//     id: 0,
//     name: 'Domingo',
//     mensagem: 'Tenha um otimo Domingo',
//   },
//   {
//     id: 1,
//     name: 'Segunda',
//     mensagem: 'Tenha uma otima Segunda',
//   },
//   {
//     id: 2,
//     name: 'Terça',
//     mensagem: 'Tenha uma boa Terça',
//   },
//   {
//     id: 3,
//     name: 'Quarta',
//     mensagem: 'Tenha uma boa Quarta',
//   },
//   {
//     id: 4,
//     name: 'Quinta',
//     mensagem: 'Tenha uma boa Quinta',
//   },
//   {
//     id: 5,
//     name: 'Sexta',
//     mensagem: 'Tenha uma boa Sexta',
//   },
//   {
//     id: 6,
//     name: 'Sabado',
//     mensagem: 'Tenha um bom Sabado',
//   }
// ];

// const reduceDayWeek = (msgDias: any) => {
//   const date = new Date();
//   switch (date.getDay) {
//     case value:
      
//       break;
  
//     default:
//       break;
//   }
// }

// const DiaSemana = () => {};

// export default DiaSemana;
'use client';

import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        console.log(todo);
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  console.log(todos);
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default Todos;