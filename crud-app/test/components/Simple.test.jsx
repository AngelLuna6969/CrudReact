import { render, screen } from '@testing-library/react';
import Simple from "../../src/components/Simple";

describe('Pruebas generales del componente Simple', () => {
    const titulo = "Hello Word"
    test('Se realiza comparacion con snapshot', () => {
        const { container } = render(<Simple titulo='Hello Word'
            subtitulo="Final de Cuatri" nombre={"Jose"} />);
        console.log(container);
        expect(container).toMatchSnapshot();
    });

    test('Se debe mostrar el titulo dentro de un h1', () => {
        
        const { container, getByText } = render(<Simple titulo={
            titulo} />)
        expect(getByText(titulo)).toBeTruthy();

        const h1 = container.querySelector("h1")
        expect(h1.innerHTML).toContain(titulo);
    });

    test('Verifica si el elemento test-id contiene el titulo', () => {
        const { getByTestId } = render(<Simple titulo={titulo} />);
        //expect (getByTextId('test-title')).toBeTruthy()
        expect(getByTestId('test-title').innerHTML).toContain(titulo)

    });

    test('El numero de elementos coincide ', ()=>{
        const subtitulo = "Hola desde Reack";
        const {getByText, getAllByText} = render(<Simple titulo={titulo}
        subtitulo={subtitulo}/>);
        //expect (getByText(subtitulo)).toBeTruthy()
        expect(getAllByText(subtitulo).length).toBe(2);
    });

    test('Debe mostrar el mensaje hola mundo', () =>{
        screen.debug();
        expect (screen.getByText(titulo)).toBeTruthy();
    }) 
});