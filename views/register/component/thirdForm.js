import React, { useState } from 'react'

// svgs
import CompanySvg from '@/views/components/companySvg';

// shadecn
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

// axios
import { instance } from '@/utils/axios';

export default function ThirdForm({ setStep }) {
    const [form, setForm] = useState({
        username: '',
        dob: '',
        gender: '',
        playstyle: '',
        player: ''
    })

    const handleChange = (e) => {
        if (typeof e === 'string') {
            // If it's a Select component change, set based on the provided value
            setForm((prevForm) => ({
                ...prevForm,
                [e.target.name]: e.target.value,
            }));
        } else {
            // For regular input changes
            const { id, value } = e.target;
            setForm((prevForm) => ({
                ...prevForm,
                [id]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the form data to the server
        instance.post('/profile', form);
        setStep(4);
        console.log(form);
    }

    return (
        <div className="mx-auto max-w-sm mt-16">
            <div className='flex flex-col justify-center items-center text-center'>
                <div className="mb-4">
                    <CompanySvg />
                </div>
                <h1 className="text-3xl font-bold">Complete your Profile</h1>
                <p className="mb-6 text-gray-500">Provide your email and choose a password.</p>
            </div>
            <form className="space-y-4">
                <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="username">
                        Username*
                    </label>
                    <Input id="username" placeholder="Enter your username" type="text" className="py-6" value={form.username} onChange={handleChange} />
                </div>
                <div className='flex w-full space-x-4'>
                    <div className='w-1/2'>
                        <label className="mb-1 block text-sm font-medium" htmlFor="dob">
                            Date of birth*
                        </label>
                        <Input id="dob" placeholder="Date of birth" type="date" className="py-6" value={form.dob} onChange={handleChange} />
                    </div>
                    <div className='w-1/2'>
                        <label className="mb-1 block text-sm font-medium" htmlFor="gender">
                            Gender*
                        </label>
                        <Select value={form.gender} onValueChange={(value) => handleChange({ target: { id: 'gender', value } })}>
                            <SelectTrigger className="h-[50px]">
                                <SelectValue placeholder="Select a gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Gender</SelectLabel>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="nonbinary">Non-binary</SelectItem>
                                    <SelectItem value="decline">Decline to answer</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="playstyle">
                        Chess Playstyle
                    </label>
                    <Select value={form.playstyle} onValueChange={(value) => handleChange({ target: { id: 'playstyle', value } })}>
                        <SelectTrigger className="h-full py-4">
                            <SelectValue placeholder="Select your playstyle" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Playstyle</SelectLabel>
                                <SelectItem value="aggressive">Aggressive</SelectItem>
                                <SelectItem value="defensive">Defensive</SelectItem>
                                <SelectItem value="tactical">Tactical</SelectItem>
                                <SelectItem value="positional">Positional</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="player">
                        Favorite Player (if any)
                    </label>
                    <Input id="player" placeholder="Enter the name" type="text" className="py-6" value={form.player} onChange={handleChange} />
                </div>
                <Button className="w-full mt-8 bg-green-600 hover:bg-green-700" onClick={handleSubmit}>Continue</Button>
            </form>
        </div>
    )
}
