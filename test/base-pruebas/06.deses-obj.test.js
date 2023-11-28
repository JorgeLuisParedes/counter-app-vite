import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe retornar un objeto', () => {

        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const { edad, clave } = persona;
        
        const testPersona = usContext( persona );

        expect( testPersona ).toStrictEqual({

            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        
        });

    });
});