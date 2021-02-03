import { GifGrid } from "../../components/GifGrid"
import {shallow} from 'enzyme'
import { useEffectGitch } from "../../hooks/useEffectGitch"
jest.mock('../../hooks/useEffectGitch')

describe('Prueba de Componente GifGrid', () => {

    const category = 'Hola';
        test('Deberia pasar el componente', () => {
            
            useEffectGitch.mockReturnValue({ //falsear data, para obtener lo que envia el usseefectgitch
                data:[], 
                loading: true
            })
            const wrapper = shallow(<GifGrid category={category} />);
            expect(wrapper).toMatchSnapshot();
        })

        test('Deberia implementar valores a nuestro array imagenes', () => {

            const gifs = [{
                id: 'abc',
                url: 'https://hola.com',
                title: 'hola'
            }]

             useEffectGitch.mockReturnValue({
                 data:gifs,
                 loagind: false
             })

            const wrapper = shallow(<GifGrid category={category} />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('p').exists()).toEqual(true); //si el parrafo existe deberia ser igual a true
            expect(wrapper.find('GifItem').length).toBe(gifs.length);
            
        })
        
        
})
