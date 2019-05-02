import { Resolver, Query } from "type-graphql";

// modulo encargado de manupular los ingresos
/*usuarios:async (_,__,{dataSources})=>{
    const usuarios = await dataSources.usuarioapi.getUsuarios()
    return usuarios
},*/




@Resolver()
export class IngresoResolver {
    @Query(() => String)
      ingresos():string {
        return  "todos los ingresos obtenidos, de los diferentes rubros";
    }
    @Query(() => String)
      ingresosPorAdministrador():string {
        return  "todos los ingresos obtenidos de un determinado usuario";
    }

}