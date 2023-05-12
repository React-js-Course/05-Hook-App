import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoItem } from "./TodoItem";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false
    },
    {
        id: new Date().getTime() + 100,
        description: 'Recolectar la piedra del Poder',
        done: false
    }
]

localStorage.setItem('todo', JSON.stringify( initialState ))
const data = localStorage.getItem('todo');
console.log(data.length);
export const TodoApp = () => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer, JSON.parse(data));

    const handleNewTodos = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatchTodo(action);
    }

  return (
    <>
        <h1>TodoApp: 10 <small>Pendientes: 2</small> </h1>
        <hr/>
        <div className="row">

            <div className="col-7">
                <ul className="list-group">
                {
                    todos.map( todo => (
                        <TodoItem key={todo.id} data={ todo } />
                    ))
                }
                </ul>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                <TodoAdd onNewTodo={ handleNewTodos }/>
            </div>

        </div>
    </>
  )
}
