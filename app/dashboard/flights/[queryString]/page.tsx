// app/dashboard/flights/[queryString]/page.tsx
import { useParams } from 'next/navigation'

const FlightsPage = () => {
  const { queryString } = useParams() // Accede al parámetro de la URL
  const searchParams = new URLSearchParams(queryString) // Convierte el 'queryString' a un objeto de parámetros

  const from = searchParams.get('from') // Obtiene el valor de 'from' de la query string

  return (
    <div>
      <h1>Flights from {from}</h1>
      {/* Usa el valor de 'from' como desees */}
    </div>
  )
}

export default FlightsPage
