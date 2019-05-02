import "reflect-metadata";
import { prop, Typegoose } from "typegoose";
import { ObjectType,Field } from "type-graphql";
import { Inject, Service } from "typedi";

@ObjectType()
export class Usuario extends Typegoose {
    @Field()@prop() id:string;
    @Field()@prop() email:string;
    @Field()@prop() rol:string;
    @Field()@prop() nombre:string;
    @Field()@prop() password:string;
}
@Service()
export class ModelUsuario {
    @Inject()
    public usuario:Usuario = new Usuario();
}