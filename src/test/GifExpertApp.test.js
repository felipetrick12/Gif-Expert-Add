import React from 'react';
import {shallow} from 'enzyme'
import {GifExpertApp} from '../GifExpertApp'

describe('Probar Componenete GifExperAdd', () => {

    test('El componente tiene que pasar ', () => {
        const categories= ['naruto', 'Rick and morty'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
});
