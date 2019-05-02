import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema} from "type-graphql";
import { IngresoResolver } from "./modules/ingreso";
import { EgresoResolver } from "./modules/egreso";
import { UsuarioResolver } from "./modules/usuario";
import { Container } from "typedi";
import  {// perfil, algo, anonima, anonimaDeclarada,funcionRetornoDefinido,
     creaConeccion}  from "./shared/database";
const main = async ()=> {
    /*interface IJoder {
        usuario:string;
    }*/
    // const joder:IJoder = perfil;
    // console.log(joder.usuario);
    // const al = algo();
    // console.log(al);
    // console.log(anonima());
    // console.log(anonimaDeclarada());
    // const retornoDefinido:string = funcionRetornoDefinido();
    creaConeccion();
    
    const schema = await buildSchema({
        resolvers:[IngresoResolver,EgresoResolver,UsuarioResolver],
        container:Container
    });
    const server = new ApolloServer({
        schema,
    });
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      });
};
main();