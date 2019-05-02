import mongoose from "mongoose";
export const perfil = {
    usuario:"principal"
};
export function algo() {
    return "algo";
}

export const anonimaDeclarada:any = ()=>"anonima declarada";
export const anonima = ()=> "anonima";
export const perfilConeccion:object = {
    usuario:"memoria"
};
export function funcionRetornoDefinido():string {
    return "funcion con retorno definido";
}
export function creaConeccion():any {
    mongoose.connect("mongodb://memoria:a123456789@ds149875.mlab.com:49875/heroku_5jb5hffp",{useNewUrlParser: true})
        .then(() => console.log("connected to db"))
        .catch(err => console.log(err));
}