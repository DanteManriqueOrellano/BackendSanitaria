import { Length,IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UsuarioInput {
    @Field() id:string;
    @Field()@Length(1,10,{message:"por lo menos un caracter"}) nombre:string;
    @Field()@IsEmail() email:string;
    @Field() rol:string;
    @Field() password:string;
}