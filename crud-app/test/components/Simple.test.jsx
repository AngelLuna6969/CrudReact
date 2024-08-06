import { render } from '@testing-library/react';
import Simple from "../../src/components/Simple";

describe('Pruebas generales del componente Simple', () => {
    test('Se realiza comparacion con snapshot', () => {
        const { container } = render(<Simple titulo='Hello Word'
            subtitulo="Final de Cuatri" />);
        console.log(container);
        expect(container).toMatchSnapshot();
    });

    test('Se debe mostrar el titulo dentro de un h1', () => {
        const titulo = "Hola Mundo"
        const { container, getByText } = render(<Simple titulo={
            titulo} />)
        expect(getByText(titulo)).toBeTruthy();

        const h1 = container.querySelector("h1")
        expect(h1.innerHTML).toContain(titulo);
    });
});