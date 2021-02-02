import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp = () => {
//   const categories = ["One Samurai", "Dragon Ball", "Naruto"]; //es un arreglo que en react no puede ser mutado por que da error, para eso esta el hook de useState
//   const handleApp=()=> { //useState se utliza por que el componenente va cambiar de estado, setComponent para enviar la propiedad que va ser el cambio de estado del elemento
//         setCategories([...categories,'Yakuza']); //para agregar un nuevo elemento al array
        
//   }

  const [categories, setCategories] = useState(["Rick And Morty" ]);

 
  return (
    <>
      <h3>GifExpertAdd</h3>
        <AddCategory setCategories ={setCategories}/>
     
      <hr />
      <ol>
      {
            categories.map( category => (
            
                <GifGrid 
                key={category}
                category={category}
                 /> 
            ))
        }
      </ol>
    </>
  );
};
