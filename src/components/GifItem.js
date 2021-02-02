import React from 'react'

export default function GifItem({title,url}) {

    return (
        
        <div className='card animate__animated animate__zoomInDown' >
           <p>{title}</p>
           <img src={url} alt={title}/>
        </div>
    )
}
