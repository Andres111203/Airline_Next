
import { db } from "@/app/firebase/client";
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore/lite';

export const getFlights = async (db: any, origen: string, destino: string, departure_date: Date, return_date: Date) => {

    const flightsCol = collection(db, 'flights')
    const flightSnapshot = await getDocs(flightsCol);
    
    const flightList = [];
    for(const vueloDoc of flightSnapshot.docs){
        const origenRef = vueloDoc.data().origen   //asignando los documentos a los que referencia la coleccion flights
        const destinoRef = vueloDoc.data().destino
        const departure = vueloDoc.data().departure_date
        const ret_date = vueloDoc.data().return_date

        const origenDoc:any = await getDoc(origenRef)   //trayendo los documentos de la otra coleccion a los cuales hace referencia la coleccion flight
        const destinoDoc:any = await getDoc(destinoRef)

        const origenCity = origenDoc === origen ? origenDoc.data().city : undefined  //asignando la ciudad de los datos del documento
        const destinoCity = destinoDoc === destino ? destinoDoc.data().city : undefined
        const dep_date = departure == departure_date ? departure : undefined
        const date_return = ret_date == return_date ? ret_date : undefined
        flightList.push(
            {
                origen: origenCity,
                destino: destinoCity,
                departure_date: dep_date,
                return_date: date_return
            }
        )
    }
    return flightList;
}

async function testGetFlights() {
    try {
        const flights = await getFlights(db, 'Cali', 'Bogota', new Date('2025-02-01'), new Date('2025-02-10'));
        console.log('Available Flights:', flights);
    } catch (error) {
        console.error('Error fetching flights:', error);
    }
}

testGetFlights();