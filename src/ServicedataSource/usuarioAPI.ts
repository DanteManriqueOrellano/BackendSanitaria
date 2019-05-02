import "reflect-metadata";
import { DataSource } from "apollo-datasource";
import { Service} from "typedi";
import {ModelUsuario, Usuario } from "../collections/usuario";
//import { ICrud } from "../tools/CRUD";

@Service()
export class UsuarioAPI  extends DataSource   {
    private readonly usuario=this.modeloUsuario.usuario.getModelForClass(Usuario);
    // inyecta el modelo usuario
    constructor(private modeloUsuario :ModelUsuario) {
        super();
    }
    async getById(id:string) {
        return await this.usuario.findOne({id});
    }

    async getAll():Promise<Usuario[]> {
        return await this.usuario.find();
    }
}