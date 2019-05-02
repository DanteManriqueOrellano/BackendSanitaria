import { Resolver, Query } from "type-graphql";
// modulo encargado de manejar y gestionar los egresos
@Resolver()
export class EgresoResolver {
    @Query(() => String)
      egresos():string {
        return  "todos los egresos obtenidos";
    }
    @Query(() => String)
      egresosPorAdministrador():string {
        return  "todos los egresos obtenidos";
    }
}