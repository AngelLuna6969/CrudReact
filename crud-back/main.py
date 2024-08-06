from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel
from typing import List, Union
import mysql.connector


app=FastAPI()
PORT: int=8080


#Middleware es solo para pruebas locales y no en producción
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
    )


db=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="crudDB",
    consume_results=True
)


class Usuario(BaseModel):
    id_usuario: Union[int, None]=None
    usuario:str
    contrasena:str
   
class Persona(BaseModel):
    id_persona: Union[int, None]=None
    nombre:str
    apaterno:str
    amaterno:str
    fechanac:str
    edocivil:str
    no_hijos:int


@app.get("/")
# función
def message():
    return {"msg":"Hola mundo desde FastAPI"}


@app.get("/usuarios")
def getUsuarios():
    usuarios=[]
    try:
        query="SELECT * FROM usuarios"
        cursor=db.cursor()
        cursor.execute(query)
        records=cursor.fetchall()
        no_regs=cursor.rowcount
        if no_regs>0:
            for record in records:
                usuario={
                    "id_usuario":record[0],
                    "usuario":record[1],
                    "contrasena":record[2]
                }
                usuarios.append(usuario)
            return {"status":"ok", "msg":"Sí hay usuarios", "data":usuarios}
        else:
            return {"status":"ok", "msg":"No hay usuarios registrados"}
    except:
        return{
                "status":"error",
                "msg":"Ocurrió un Error en la Consulta"
            }
 
@app.get("/usuarios/{id}")
def getUsuarioByID(id):
    try:
        query="SELECT * FROM usuarios WHERE id_usuario={}".format(id)
        cursor=db.cursor()
        cursor.execute(query)
        record=cursor.fetchone()
        no_regs=cursor.rowcount
        if no_regs>0:
            usuario={
                    "id_usuario":record[0],
                    "usuario":record[1],
                    "contrasena":record[2]
                }
            return {"status":"ok", "msg":"Sí hay usuario", "data":usuario}
        else:
            return {"status":"error", "msg":"No se encontró el usuario"}
    except:
        return{
                "status":"error",
                "msg":"Ocurrió un Error en la Consulta"
            }  


@app.post("/usuarioByUC")
def getUsuarioByUsuarioContrasena(user:Usuario):
    try:
        query="SELECT * FROM usuarios WHERE usuario='{}' AND contrasena='{}';".format(user.usuario, user.contrasena)
        cursor=db.cursor()
        cursor.execute(query)
        record=cursor.fetchone()
        no_regs=cursor.rowcount
        if no_regs>0:
            usuario={
                "id_usuario":record[0],
                "usuario":record[1],
                "contrasena":record[2]
            }
            return {
                "status":"ok",
                "msg":"Usuario Encontrado",
                "data":usuario
            }
        else:
            return{
                "status":"error",
                "msg":"Usuario No Encontrado"
            }
    except:
        return{
                "status":"error",
                "msg":"Ocurrió un Error en la Consulta"
            }


   
@app.post("/usuarios")
def setUsuario(user:Usuario):
    try:
        query ="INSERT INTO usuarios (`usuario`,`contrasena`) VALUES ('{}','{}')".format(user.usuario, user.contrasena)
        cursor =db.cursor()
        cursor.execute(query)
        db.commit()
        return {
            "status":"ok",
            "msg":"Usuario Agregado",
            "data":{
                "id_usuario": lastIndex("usuarios", "id_usuario")
                }
            }
    except:
        return{
                "status":"error",
                "msg":"Ocurrió un Error en la Consulta"
            }


@app.put("/usuarios")
def updateUsuario(user:Usuario):
    try:
        query="UPDATE usuarios SET usuario='{}', contrasena='{}' WHERE id_usuario={};".format(user.usuario, user.contrasena, user.id_usuario)
        print(query)
        cursor=db.cursor()
        cursor.execute(query)
        db.commit()
        return{
            "status":"ok",
            "msg":"Usuario Actualizado",
            "data":{
                "id_usuario": user.id_usuario
                }
        }
    except:
        return{
                "status":"error",
                "msg":"Ocurrió un Error en la Actualización"
            }
       
@app.delete("/usuarios")
def delUsuario(user:Usuario):
    try:
        query="DELETE FROM usuarios WHERE id_usuario={};".format(user.id_usuario)
        print(query)
        cursor=db.cursor()
        cursor.execute(query)
        db.commit()
        return{
            "status":"ok",
            "msg":"Usuario Eliminado",
            "data":{
                "id_usuario": user.id_usuario
                }
        }
    except:
        return{
                "status":"error",
                "msg":"Ocurrió un Error en la Eliminación"
            }
   


def lastIndex(tabla:str,attr:str):
    try:
        query="SELECT {} from {} order by {} desc".format(attr, tabla, attr)
        cursor=db.cursor()
        cursor.execute(query)
        record=cursor.fetchone()
        return record[0]
    except:
        return{
                "status":"error",
                "msg":"Ocurrió un Error en la Consulta"
            }


@app.get("/personas")
def getPersonas():
    personas=[]
    try:
        query="SELECT * FROM personas"
        cursor=db.cursor()
        cursor.execute(query)
        records=cursor.fetchall()
        no_regs=cursor.rowcount
        if no_regs>0:
            for record in records:
                persona={
                    "id_persona":record[0],
                    "nombre":record[1],
                    "apaterno":record[2],
                    "amaterno":record[3],
                    "fechanac":record[4],
                    "edocivil":record[5],
                    "no_hijos":record[6]
                }
                personas.append(persona)
            return {"status":"ok", "msg":"Sí hay usuarios", "data":personas}
        else:
            return {"status":"ok", "msg":"No hay usuarios registrados"}
    except:
        return{
                "status":"error",
                "msg":"Ocurrió un Error en la Consulta"
            }
       
@app.post("/personas")
def setPersona(person:Persona):
    try:
        query ="INSERT INTO personas (`nombre`,`apaterno`, `amaterno`,`fechanac`,`edocivil`,`no_hijos`) VALUES ('{}','{}','{}','{}','{}','{}')".format(person.nombre, person.apaterno, person.amaterno, person.fechanac, person.edocivil, person.no_hijos)
        cursor =db.cursor()
        cursor.execute(query)
        db.commit()
        return {
            "status":"ok",
            "msg":"Usuario Agregado",
            "data":{
                "id_usuario": lastIndex("usuarios", "id_usuario")
                }
            }
    except:
        return{
                "status":"error",
                "msg":"Ocurrió un Error en la Consulta"
            }




if __name__=="__main__":
    uvicorn.run(app, host="127.0.0.1", port=PORT)