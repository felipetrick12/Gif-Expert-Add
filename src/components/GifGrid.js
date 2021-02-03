import React from "react";
import { useEffectGitch } from "../hooks/useEffectGitch";
import GifItem from "./GifItem";
import PropTypes from 'prop-types';
export const GifGrid = ({ category }) => {
   
       const {data:imagen,loading}= useEffectGitch(category);


        return (
            <>

            
            <h2>{category}</h2>
            <p>{loading && 'Cargando'}</p>
            
                <div className='cardGrid '>
                {imagen.map((img) => (
                    <GifItem key={img.id} {...img}/> //se utiliza el expred para enviar propiedades indepenedientes del arreglo
                ))}
               </div>
           
            </>
        );
};
GifGrid.prototype = {
    category: PropTypes.string.isRequired
}
