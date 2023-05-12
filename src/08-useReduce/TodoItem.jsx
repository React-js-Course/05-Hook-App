

// eslint-disable-next-line react/prop-types
export const TodoItem = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { id, description } = data;
  return (
    <>
        <li key={ id } className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ description }</span>
            <button className="btn btn-outline-danger" >Borrar</button>
        </li>
    </>
  )
}
