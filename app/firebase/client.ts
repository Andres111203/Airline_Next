import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyBFmDwOENHSLA7xvKNeK9NaXFl-Swzveq4",
    authDomain: "aerolinea-d1479.firebaseapp.com",
    projectId: "aerolinea-d1479",
    storageBucket: "aerolinea-d1479.firebasestorage.app",
    messagingSenderId: "1048363272082",
    appId: "1:1048363272082:web:08ebf14363057188b2634b",
    measurementId: "G-B4NX8Z6WQ6"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
  
export const getCities = async (db: any) => {

    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

type Flight = {
    id: string;
    origen: string;
    destino: string;
    departure_date: Date;
    return_date: Date;
};

export const flights = async (db: any) => {
    const flightsCol = collection(db, 'flights');
    const flightSnapshot = await getDocs(flightsCol);
    const flightList: any = [];
    for(const vuelos of flightSnapshot.docs){
        const id = vuelos.data().id;
        const origenRef = vuelos.data().origen;
        const destinoRef = vuelos.data().destino;
        const departure = vuelos.data().departure_date;
        const return_date = vuelos.data().return_date;
        const price = vuelos.data().price;

        const origen_Doc: any = await getDoc(origenRef);
        const destino_Doc: any = await getDoc(destinoRef);

        const origenCity = origen_Doc.data().city;
        const destinoCity = destino_Doc.data().city;
        const depar_h = vuelos.data().departure_hour;
        const return_h = vuelos.data().return_hour;



        flightList.push({
            id,
            origenCity,
            destinoCity,
            departure,
            return_date,
            depar_h,
            return_h,
            price
        })
    }
    return flightList;
}




export const getFlights = async (db: any, origen: string, destino: string, departure_date: Date, return_date: Date) => {

    const flightsCol = collection(db, 'flights')
    const flightSnapshot = await getDocs(flightsCol);
    
    const flightList = [];
    for(const vueloDoc of flightSnapshot.docs){
        const origenRef = vueloDoc.data().origen   //asignando los documentos a los que referencia la coleccion flights
        const destinoRef = vueloDoc.data().destino
        const departure = vueloDoc.data().depa;
        const ret_date = vueloDoc.data().return_date
        const id = vueloDoc.data().id
        console.log(id)
        const origenDoc:any = await getDoc(origenRef)   //trayendo los documentos de la otra coleccion a los cuales hace referencia la coleccion flight
        const destinoDoc:any = await getDoc(destinoRef)

        const origenCity = origenDoc.data().city  //asignando la ciudad de los datos del documento
        const destinoCity = destinoDoc.data().city 
        const dep_date = departure
        const date_return = ret_date
        console.log("origen:", origenCity)
        console.log("destino:", destinoCity)
        console.log("departure_date:", dep_date)
        console.log("return_date:", date_return)
        if(origenCity === origen && destinoCity === destino && dep_date && date_return){
            flightList.push(
                {
                    id: id,
                    origen: origenCity,
                    destino: destinoCity,
                    departure_date: dep_date,
                    return_date: date_return,
                    
                }
            )
        }
    }
    return flightList;
}

async function testGetFlights() {
    try {
        const fl = await flights(db)
        console.log('Available Flights:', fl);
        for(const vuelo of fl){
            console.log('Vuelo id:', vuelo.id);
        }
    } catch (error) {
        console.error('Error fetching flights:', error);
    }
}

testGetFlights();




