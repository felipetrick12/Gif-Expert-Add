import React from 'react'
import PropTypes from "prop-types";


export default function GifItem({title,url}) {

    return (
        
        <div className='card animate__animated animate__zoomInDown' >
           <p>{title}</p>
           <img src={url} alt={title}/>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };
