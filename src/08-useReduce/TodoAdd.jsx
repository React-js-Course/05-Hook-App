import { useForm } from "../hooks/useForm"

// eslint-disable-next-line react/prop-types
export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onButtonReset } = useForm({
        description: ''
    })
    
    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime() + 110,
            done: false,
            description
        }

        onNewTodo && onNewTodo(newTodo);
        onButtonReset();
    }

  return (
    <>
        <form onSubmit= {onFormSubmit }>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-2"
                    type="submit">
                Agregar
            </button>
        </form>
    </>
  )
}
