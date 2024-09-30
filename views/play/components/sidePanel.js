import React, { useEffect } from 'react'

// shadecn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// utils
import { cn } from "@/lib/utils"
import ChatBot from './chatBot'
import GamePanel from './gamePanel'
    

export default function SidePanel({ chatName, gameID }) {

  return (
    <Tabs defaultValue="game" className="w-full h-full">
  <TabsList className="w-full p-0">
    <CustomTabsTrigger value="game" id="Game" className={'rounded-tl-lg'}/>
    <CustomTabsTrigger value="AI" id="AI" className={'border-r border-l border-gray-500'}/>
    <CustomTabsTrigger value="friends" id="friends" className={'rounded-tr-lg'}/>
  </TabsList>
  <TabsContent value="game" className="flex justify-center items-center">
        <GamePanel gameID={gameID}/>
    </TabsContent>
  <TabsContent value="friends" className="flex justify-center items-center">
        Coming soon
    </TabsContent>
  <TabsContent value="AI" className="flex justify-start items-center">
        <ChatBot chatName={chatName}/>
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
