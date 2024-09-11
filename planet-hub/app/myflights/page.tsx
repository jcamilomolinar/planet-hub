import { Flight } from "@/components/Flight"
import { flights_data } from "@/lib/data"

export default function Home() {
  return (
    <div>
      <h1 className="text-textTitle text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">My flights</h1>
      <h2 className="text-xl text-muted-foreground my-5">Check your booked flights!</h2>
      {
        flights_data.map((flight: any, index: number) => (
          <Flight key={index} planet={flight.planet} timeTravel={flight.timeTravel} price={flight.price} hour={flight.time} date={flight.date.toISOString().split('T')[0]} showButton={false}/>
        ))
      }
    </div>
  );
}