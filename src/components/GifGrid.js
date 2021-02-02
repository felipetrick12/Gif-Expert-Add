import React from "react";
import { useEffectGitch } from "../hooks/useEffectGitch";
import GifItem from "./GifItem";

export const GifGrid = ({ category }) => {
   
       const {data:imagen,loading}= useEffectGitch(category);


        return (
            <>

            
            <h2>{category}</h2>
            <h2>{loading && 'Cargando'}</h2>
            <ol>
                <div className='cardGrid '>
                {imagen.map((img) => (
                    <GifItem key={img.id} {...img}/> //se utiliza el expred para enviar propiedades indepenedientes del arreglo
                ))}
               </div>
            </ol>
            </>
        );
};
