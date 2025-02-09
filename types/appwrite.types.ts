import { Models } from "node-appwrite";

export interface User extends Models.Document {

    userId: string,
    nombre: string,
    apellido: string,
    email: string,
    phone: string,
    password: string,

}