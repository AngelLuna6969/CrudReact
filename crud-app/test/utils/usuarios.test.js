import { getMensaje, getUsuarioByID } from "../../src/utils/usuarios";

describe('Pruebas sobre las funciones de Usuarios', () => {
    test('Recuperación de mensaje', () => {
        const usuario = "Andrea";
        const msg = getMensaje(usuario);
        expect(msg).toBe(`Saludos ${usuario}`);
    });
    test('Evaluando función que recupera un usuario por ID', async () => {
        const id = 2;
        const usuario = getUsuarioByID(id);
        const respuesta = {
            "status": "ok",
            "msg": "Sí hay usuario",
            "data": {
                "id_usuario": 2,
                "usuario": "melani",
                "contrasena": "040319"
            }
        }
        expect(usuario).toBe(respuesta);
    });
})