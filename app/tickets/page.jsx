import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../Loading"
export default function Tickets(){
    return(
        <main>
         <nav>
            <div className="">
                <h2>Tickets</h2>
                <p><small>Curently open tickets.</small></p>
            </div>
         </nav>

         <Suspense fallback={<Loading/>}>
         <TicketList/>
         </Suspense>
        </main>
    )
}