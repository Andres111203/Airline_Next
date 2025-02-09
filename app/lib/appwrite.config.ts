import * as sdk from 'node-appwrite'


export const {
    PROJECT_ID,
    API_KEY,
    USER_COLLECTION ,
    FLIGHTS_COLLECTION,
    RESERVATIONS_COLLECTION,
    CITIES_COLLECTION,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env;

const client = new sdk.Client();

//asignando las claves a la instancia de node-write para conectar con el proyecto

client
.setEndpoint(ENDPOINT!)
.setProject(PROJECT_ID!)
.setKey(API_KEY!)

//esportando los servicios que ofrece el servidor de appwrite
export const database = new sdk.Databases(client)
export const storage = new sdk.Storage(client)
export const messating =  new sdk.Messaging(client)
export const users = new sdk.Users(client)

console.log(ENDPOINT)