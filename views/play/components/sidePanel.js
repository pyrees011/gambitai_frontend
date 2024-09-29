import React from 'react'

// shadecn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import ChatBot from './chatBot'
    

export default function SidePanel() {
  return (
    <Tabs defaultValue="game" className="w-full h-full">
  <TabsList className="w-full p-0">
    <CustomTabsTrigger value="game" id="Game" className={'rounded-tl-lg'}/>
    <CustomTabsTrigger value="AI" id="AI" className={'border-r border-l border-gray-500'}/>
    <CustomTabsTrigger value="friends" id="friends" className={'rounded-tr-lg'}/>
  </TabsList>
  <TabsContent value="game" className="flex justify-center items-center">
        <div className='p-2 flex flex-col justify-center items-start w-full h-full'>
            <p className='text-white font-bold text-2xl mb-2'>Moves</p>
            <Separator />
            <Table className="text-white w-full">
                <TableBody className="w-full">
                    { !exampleGameMoves?.length && (
                        <TableRow className="bg-slate-500 h-10">
                            <TableCell className="font-medium">No moves yet</TableCell>
                        </TableRow>
                    )}
                    { exampleGameMoves?.map((move, index) => (
                        <TableRow className={ cn('bg-slate-500 h-10', {
                            'bg-slate-700': index % 2 === 0
                        })}>
                            <TableCell className="font-medium">{ index + 1 }</TableCell>
                            <TableCell>{ move.from }</TableCell>
                            <TableCell>{ move.to }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* <div className='flex justify-center items-center mt-auto'>
                <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold rounded-lg py-2 px-4'>Undo</button>
            </div> */}

        </div>
    </TabsContent>
  <TabsContent value="friends" className="flex justify-center items-center">
        Coming soon
    </TabsContent>
  <TabsContent value="AI" className="flex justify-start items-center">
        <ChatBot />
    </TabsContent>
</Tabs>
  )
}

const CustomTabsTrigger = ({ value, className, id }) => (
    <TabsTrigger
        value={value}
        className={cn('w-full py-2 text-gray-600 rounded-none hover:text-gray-950 bg-slate-400 hover:bg-slate-700 data-[state=active]:bg-gray-500 data-[state=active]:shadow-none data-[state=active]:text-white data-[state=active]:pb-4 transition-color font-semibold', className)}
    >
        {id}
    </TabsTrigger>
)

const exampleGameMoves = [
    {
        from: 'e2',
        to: 'e4',
    }, 
    {
        from: 'e7',
        to: 'e5',
    }, 
    {
        from: 'g1',
        to: 'f3',
    }, 
    {
        from: 'b8',
        to: 'c6',
    }
]
