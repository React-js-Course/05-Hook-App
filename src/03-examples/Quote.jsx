
export const Quote = ({ quote, character }) => {
  return (
    <blockquote className="blockquote text-end" >
      <p  className="mb-1">{ quote }</p>
      <footer className="blockquote-footer" >{ character }</footer>
    </blockquote>
  )
}
