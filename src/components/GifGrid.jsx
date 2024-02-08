import { useFetchGifs } from "../hooks/useFetchGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h4>Cargando...</h4>)
      }
      <div className="card-grid">
        {
          images.map( ( image ) => (
            <GifItem 
              key={ image.id }
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}
