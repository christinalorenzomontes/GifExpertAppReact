import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Sailor Moon'])
  console.log(categories)

  return (
    <>
      <h1>GifExpertApp</h1>

      <ol>
        { categories.map( category => {
            return <li key={category}>Hola</li>
        }) }
        
      </ol>
    </>
  );
}
