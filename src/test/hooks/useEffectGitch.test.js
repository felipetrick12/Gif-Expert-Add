import React from 'react';
import {shallow} from 'enzyme'
import { useEffectGitch } from '../../hooks/useEffectGitch';
import {renderHook} from '@testing-library/react-hooks'

describe('prueba del hook useEffectgitch', () => {
    
    test('debe  retornar el estado inicial ', () => {
        const {result}= renderHook(()=> useEffectGitch('naruto'));
        const {data,loading} =result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    })
    
})
