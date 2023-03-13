const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, layover: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, layover: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, layover: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, layover: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];



const userName = prompt("Por favor, introduce tu nombre:");
console.log(`¡Bienvenido/a, ${userName}! Estos son los vuelos disponibles para hoy:` );
function showflights(flights) {
    for (let i = 0; i < flights.length; i++) {
      const LayoverText = flights[i].layover ? "realiza escalas" : "no realiza escalas";
      console.log(`El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost}€ y ${LayoverText}.`);
    }
  }
showflights(flights)

const averageCost = flights.reduce((acc, flights) => acc + flights.cost, 0) / flights.length;
console.log(`El coste medio de los vuelos es de ${averageCost.toFixed(2)}€.`);


const countFlightsWithlayover = () => {
  const flightsWithlayover = flights.filter((flight) => flight.layover);
  return flightsWithlayover.length;
};
console.log('Hay ' + countFlightsWithlayover(flights) + " vuelos que hacen escala" )

const showLastFiveDestinations = () => {
  console.log("Los destinos de los últimos 5 vuelos son:");
  const lastFiveFlights = flights.slice(-5);
  lastFiveFlights.forEach((flight) => console.log(`- ${flight.to}`));
};
showLastFiveDestinations(flights)

const role = prompt("¿Eres admin o user?");

if (role === "admin") {
} else if (role === "user") {
} else {
  console.log("Rol no válido");
}






const createFlight = () => {
  const maxFlights = 15;

  if (flights.length >= maxFlights) {
    console.log(`Ya se han creado el máximo de ${maxFlights} vuelos`);
    return;
  }

  const id = flights.length + 1;
  const from = prompt("Introduce el origen del vuelo");
  const to = prompt("Introduce el destino del vuelo");
  const price = Number(prompt("Introduce el precio del vuelo"));
  const layover = prompt("¿El vuelo hace escala? (s/n)").toLowerCase() === "s";

  flights.push({ id, from, to, price, layover });

  console.log(`Se ha creado el vuelo ${id} de ${from} a ${to} por ${price}€`);
};
createFlight(flights)
showflights(flights)



const deleteFlightById = () => {
  const idToDelete = Number(
    prompt("Introduce el ID del vuelo que quieres eliminar")
  );

  const indexToDelete = flights.findIndex((flight) => flight.id === idToDelete);

  if (indexToDelete !== -1) {
    flights.splice(indexToDelete, 1);
    console.log(`Se ha eliminado el vuelo con ID ${idToDelete}`);
  } else {
    console.log(`No se ha encontrado ningún vuelo con ID ${idToDelete}`);
  }
};
deleteFlightById(flights)

const searchFlightsByPrice = () => {
  const maxPrice = Number(
    prompt("Introduce el precio máximo que quieres pagar")
  );
  const filteredFlights = flights.filter((flight) => flight.price <= maxPrice);

  if (filteredFlights.length > 0) {
    console.log(`Los vuelos por debajo de ${maxPrice}€ son:`);
    filteredFlights.forEach((flight) =>
      console.log(` ${flight.from} → ${flight.to} (${flight.price}€))`)
    );
  } else {
    console.log(`No se han encontrado vuelos por debajo de ${maxPrice}€`);
  }
};
searchFlightsByPrice(flights)
