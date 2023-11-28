import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, soy Jorge Luis Paredes';
    const subTitle = 'Soy un subtitulo';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar el mensaje "Hola, soy Jorge Luis Paredes"', () => {

        render( <FirstApp title={ title } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
        // screen.debug();

    });

    test('Dede de mostrar el título en un h1', () => {

        render( <FirstApp title={ title } /> );
        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( title );

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {

        render(
            <FirstApp
                title={ title }
                subTitle={ subTitle }
            />
        );

        expect( screen.getAllByText( subTitle ).length ).toBe( 2 );
    });

});