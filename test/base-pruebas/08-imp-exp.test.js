import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un héroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();

    });

    // Tarea:
    // Debe de retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    // Debe de retornar un arreglo con los héroes de Marvel
    // Length === 2

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC, comprobar que el largo del arreglo sea 3 y comprobar el contenido del arreglo', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        // Comprueba que todos los héroes sean de DC sin importar que el tamaño del arreglo cambie
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );

    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel, comprobar que el largo del arreglo sea 2', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    });

})