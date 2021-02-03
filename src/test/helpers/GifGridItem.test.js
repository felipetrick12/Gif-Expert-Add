import { shallow } from "enzyme";
import React from 'react';
import { GifGridItem } from "../../Helpers/GifGridItem";

describe('prueba de helper GifgidItem fecth', () => {
    
    test('debe de traer 10 elementos', async() => {

       const gif= await GifGridItem('naruto');
        expect(gif.length).toBe(10);
    })

    test('debe de traer 0 elementos', async() => {

        const gif= await GifGridItem('');
         expect(gif.length).toBe(0);
     })
    
})

