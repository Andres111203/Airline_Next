'use client'

import { db } from "@/app/firebase/client";
import {flights} from '@/app/firebase/client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
  

export const TableDemo= () => {
    const [fly, setFly] = useState<any>([])
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            const data = await flights(db)
            setFly(data)
        };
        fetchData();
        }, []);
        

return (
    <Table>
        <TableCaption><strong>Available Flights</strong></TableCaption>
    <TableHeader>
        <TableRow>
        <TableHead className="w-[100px]">Id Vuelo</TableHead>
        <TableHead className="w-[100px]">From</TableHead>
        <TableHead>To</TableHead>
        <TableHead>Departure Date</TableHead>
        <TableHead className="text-right">Return Date</TableHead>
        <TableHead className="text-right">Departure Hour</TableHead>
        <TableHead className="text-right">Return Hour</TableHead>
        <TableHead className="text-right">Price</TableHead>
        <TableHead className="text-right">Buy</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {fly.map((vuelo: any, index: any) => (
        <TableRow key={index}>
            <TableCell className="font-medium">{vuelo.id}</TableCell>
            <TableCell className="font-medium">{vuelo.origenCity}</TableCell>
            <TableCell>{vuelo.destinoCity}</TableCell>
            <TableCell>{vuelo.departure}</TableCell>
            <TableCell className="text-right">{vuelo.return_date}</TableCell>
            <TableCell className="text-center">{vuelo.depar_h}</TableCell>
            <TableCell className="text-center">{vuelo.return_h}</TableCell>
            <TableCell className="text-right">{vuelo.price}</TableCell>
            <TableCell className="text-right"><Button onClick={() => {router.push(`/dashboard/user/${vuelo.id}?price=${vuelo.price}`)}}>Buy</Button></TableCell>
        </TableRow>
        ))}
    </TableBody>
    <TableFooter>
        
    </TableFooter>
    </Table>
    )
}


export default TableDemo;