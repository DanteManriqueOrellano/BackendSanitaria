import { prop, Typegoose } from "typegoose";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Pago extends Typegoose {
    @prop()@Field() id:string;
    @prop()@Field() monto:number;
    @prop()@Field() fecha:string;
}
export const pagoModel = new Pago().getModelForClass(Pago);