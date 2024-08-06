
describe("Esta es una prueba demo", () => {
    test('Verificación de prueba lógica', () => {
        if (true != true) {
            throw new Error("Ha ocurrido un error");

        }
    });
    test('Verificación de prueba lógica fallida', () => {
        if (true == true) {
            throw new Error("Ha ocurrido un error");

        }
    });

    test('Prueba empleando el marco de jest', () => {
        // 1. Inicialización
        const msg1 = "Hola Mundo";

        // 2. Estímulo
        const msg2 = msg1.trim(msg1);

        // 3. Comportamiento
        expect(msg1).toBe(msg2);
    })
})