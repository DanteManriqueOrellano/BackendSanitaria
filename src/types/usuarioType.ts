import "reflect-metadata";
import { ObjectType,Field } from "type-graphql";

@ObjectType()
export class UsuarioType {
    @Field() id:string;
    @Field() email:string;
    @Field() rol:string;
}