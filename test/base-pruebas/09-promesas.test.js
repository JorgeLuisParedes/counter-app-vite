import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba en 09-promesas', () => {
    
    test('getHeroeByIdAsync debe de retornar un héroe', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            });

    });

    test('getHeroeByIdAsync debe de tener un error si el  héroe no existe', ( done ) => {
        
        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {

                expect( error ).toBe( `No se pudo encontrar el héroe con el ID ${ id }` );

                done();
            });

    });

});