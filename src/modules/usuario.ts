import "reflect-metadata";
import  {}  from "class-validator";
import { Resolver, Query, ArgsType, Field, Args} from "type-graphql";
import  {UsuarioAPI}  from "../ServicedataSource/usuarioAPI";
import { Usuario } from "../collections/usuario";


// modulo encargado de manejar y gestionar los egresos
@ArgsType()
export class UsuarioArgs {
  @Field() id:string="02";
  @Field() nombre:string;
  @Field() email:string;
  @Field() password:string;
  @Field() rol:string;
}

@Resolver()
export class UsuarioResolver {// se muestra al cliente
    constructor(
       private readonly usuarioAPI:UsuarioAPI
    ) {}
    @Query(() => Usuario)
    async unUsuario(@Args() {id}:UsuarioArgs)  {
      return await this.usuarioAPI.getById(id);
    }
    @Query(()=>[Usuario],{nullable:true})
    async todosUsuarios():Promise<Usuario[]> {
      return await this.usuarioAPI.getAll();
    }
}