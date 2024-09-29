import React from 'react'
import Image from 'next/image'

// component
import SectionHeader from './sectionHeader'
import ThreeDButton from '@/views/components/threeDButton'

// shadecn
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
    import { Badge } from "@/components/ui/badge"
  
  

export default function StartSection() {
  return (
    <div className='w-full mt-12'>
        <div className='grid grid-cols-4 gap-12 w-full'>
            { sectionInfo.map((section, index) => (
                <SectionHeader image={section.image} title={section.title} description={section.description} key={index}/>
            ))}
        </div>
        <div className='grid grid-cols-4 gap-12 w-full mt-8'>
            <div className='flex flex-col items-center'>
                { buttonInfo.map((button, index) => (
                    <ThreeDButton key={index} image={button.image} title={button.title} route={button.route} smallButton={true}/>
                ))}
            </div>
            <div className='flex flex-col items-center justify-start col-span-3'>
            <Card x-chunk="dashboard-06-chunk-0" className="bg-gray-200 w-full pt-2">
                <CardHeader>
                  <CardTitle>Events</CardTitle>
                  <CardDescription>
                    Upcoming events and recent activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Price
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Date
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Champion's Chess Tour
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Draft</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $499.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-07-12 10:42 AM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          India college chess championship
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $129.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-10-18 03:21 PM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Vugar Gashimov Memorial
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $129.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-10-18 03:21 PM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Iberoamerican Championship
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $129.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-10-18 03:21 PM
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
        </div>
    </div>
  )
}

const sectionInfo = [
    {
        image: '/trophy.png',
        title: 'Play',
        description: 30
    },
    {
        image: '/puzzles.png',
        title: 'puzzles',
        description: 1445
    },
    {
        image: '/bot.png',
        title: 'play bots',
        description: 532
    },
    {
        image: '/trophy.png',
        title: 'game review',
        description: 'learn from your mistakes'
    }
]

const buttonInfo = [
    {
        image: '/clock.png',
        title: 'Play Now',
        route: '/play'
    },
    {
        image: '/puzzles.png',
        title: 'Puzzles',
        route: '/puzzles'
    },
    {
        image: '/bot.png',
        title: 'play bots',
        route: '/bots'
    },
    {
        image: '/handshake.png',
        title: 'play friends',
        route: '/friend'
    }
]