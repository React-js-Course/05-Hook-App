import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {

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
           <LoadingQuote/> :
           <Quote quote={quote} character={character} />
        }

        <button className="btn btn-warning" onClick={ () => increment(1) } >Next Quote</button>


    </>
  )

}
