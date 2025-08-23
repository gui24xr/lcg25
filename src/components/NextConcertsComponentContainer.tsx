
import DataService from "@/lib/data";
import { NextConcertsList } from ".";
import Link from "next/link";





export default async function NextConcertsComponentContainer() {

    const concerts = await DataService.getConcerts();
    
    //Esta vista va a mostrar los proximos conciertos de la banda
    return (
        <div className="w-full bg-gradient-to-br from-slate-800 to-green-800 p-12 sm:p-16 md:p-24 lg:p-32 xl:p-48">
            <h1 className="font-bebas text-4xl ">Próximos Conciertos</h1>
            <div className="flex flex-col gap-4">
                <NextConcertsList concerts={concerts} />
                <Link href="/concerts">Ver todos los conciertos</Link>
            </div>
        </div>
    )
}