import React, { useState, useEffect } from 'react'

// firebase
import { ref, onValue, off } from "firebase/database";
import { db } from '@/config/firebase_config';

// shadecn
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Separator } from "@/components/ui/separator"

// utils
import { cn } from "@/lib/utils"


export default function GamePanel({ gameID }) {
    const [moves, setMoves] = useState();

    useEffect(() => {
        const movesRef = ref(db, `games/${gameID}/moves`);
        
        // Set up a listener for changes to the moves
        const unsubscribe = onValue(movesRef, (snapshot) => {
            const movesData = snapshot.val();
            if (movesData) {
                // Convert the object of moves to an array and sort by timestamp
                const movesArray = Object.entries(movesData).map(([key, value]) => ({
                    id: key,
                    ...value
                }));
                
                setMoves(movesArray);
                
            } else {
                setMoves([]);
            }
        });

        // Clean up the listener when the component unmounts or gameID changes
        return () => {
            off(movesRef);
        };
    }, [gameID]);

  return (
    <div className='p-2 flex flex-col justify-center items-start w-full h-full'>
            <p className='text-white font-bold text-2xl mb-2'>Moves</p>
            <Separator />
            <Table className="text-white w-full">
                <TableBody className="w-full">
                    { !moves?.length && (
                        <TableRow className="bg-slate-500 h-10">
                            <TableCell className="font-medium">No moves yet</TableCell>
                        </TableRow>
                    )}
                    { moves?.map((move, index) => (
                        <TableRow key={index} className={ cn('bg-slate-500 h-10', {
                            'bg-slate-700': index % 2 === 0
                        })}>
                            <TableCell className="font-medium">{ index + 1 }</TableCell>
                            <TableCell>{ move.from }</TableCell>
                            <TableCell>{ move.to }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
  )
}
