import { useState,useEffect } from "react"
import {GifGridItem} from '../Helpers/GifGridItem'


export const useEffectGitch = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        GifGridItem (category).then(
            imgs=>{
                setTimeout(() => {
                 
                    setstate({
                        data:imgs,
                        loading:false
                    })
                }, 2000);
            }
        )
    }, [category])

    return state;
}
