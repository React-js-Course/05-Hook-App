import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const { data ,isLoading, hasError } = useFetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${ counter }`);
  const { character, quote } = !!data && data[0];

console.log(character)

  return (
    <>
        <h3>BreakingBad Quotes</h3>
        <hr/>

        {
          isLoading ? 
           (<div className="alert alert-info text-center" >
              Loading...
            </div>) :
           (
            <blockquote className="blockquote text-end" >
              <p  className="mb-1">{ quote }</p>
              <footer className="blockquote-footer" >{ character }</footer>
            </blockquote>
           )
        }

        <button className="btn btn-warning" onClick={ () => increment(1) } >Next Quote</button>


    </>
  )

}
