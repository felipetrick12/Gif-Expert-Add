import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { AddCategory } from '../../components/AddCategory';



describe('Debe agregar una nueva categoria', () => {
    const funcion =jest.fn();
    let wrapper = shallow(<AddCategory setCategories={funcion}/>);

    beforeEach(()=> { //ciclo de vida, para que un objeto se reinicialize
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={funcion}/>);
    })

    test('debe pasar el componente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe cambiar el valor del componente ', () => {
        
        const value= '';
        const input= wrapper.find('input');
        input.simulate('change', {target: value}); //en el inpu simula que el input es cambiado, que dentro de ese change esta buscando un evento target y el target trae ese valor
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    test('no debe de enviar la informacion si es menor que 2 ', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(funcion).not.toHaveBeenCalled();
    });

    test('debe de llamar la funcion  y limpiar la caja de texto ', () => {
        const value= 'hola'; 
        
        wrapper.find('input').simulate('change', {target: {value}}); //simula el input,y sus propiedades
        
        wrapper.find('form').simulate('submit', {preventDefault(){}}) //simula el form y sus propiedades,
        expect(funcion).toHaveBeenCalled(); //espera que la funcion se halla llamado por lo menos una vez

        expect(wrapper.find('input').prop('value')).toBe('') //mira si el valor esperado es en blanco q es el q limpia la caja
    })
    
    
})
