import { shallow } from "enzyme";
import React from 'react';
import GifItem from "../../components/GifItem";


describe('Prueba de Componente GifItem', () => {
    
    const url = 'https://www.facebook.com';
    const title='soy rick';
    const clas='animate__zoomInDown';
    const wapper = shallow(<GifItem title={title} url={url}/>);

    test('Deberia renderizar el componente ', () => {

        expect(wapper).toMatchSnapshot();    

    });

    test('deberia tener un parrafo con titulo ', () => {

            const p = wapper.find('p'); //busque en el componenente gifitem,(wapper), el p del componente
            expect(p.text().trim()).toBe(title);//si hay un p,en texto quitele los espacios y comparelo con el titulo que e envie si son iguales
    });

    test('deberia tener una url y un alt en la img', () => {
        
        const img = wapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Deberia habr un Div con la clase animate__zoomInDown', () => {
        
        const div= wapper.find('div');

        expect(div.prop('className').includes(clas)).toBe(true);
       
    });
    
    
    
    
})
