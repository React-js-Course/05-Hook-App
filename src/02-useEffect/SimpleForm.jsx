import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Kakuca',
        email: 'hector@test.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
        // console.log('UseEffect called!');
    }, []);

    useEffect(() => {
        // console.log('formState called!');
    }, [formState]);

    useEffect(() => {
        // console.log('email called!');
    }, [email]);
    
  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="HECTOR@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
        {
            (username === 'kakuca') && <Message/>
        }
    </>
  )
}
