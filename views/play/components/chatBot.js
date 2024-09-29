import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight } from "lucide-react"

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Gambit AI, your chess assistant. How can I help you today?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { id: messages.length + 1, text: input, sender: 'user' }
      setMessages([...messages, newMessage])
      setInput('')
      setTimeout(() => {
        const botResponse = getBotResponse(input)
        setMessages(prev => [...prev, { id: prev.length + 1, text: botResponse, sender: 'bot' }])
      }, 1000)
    }
  }

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase()
    if (lowerInput.includes('opening')) {
      return "There are many chess openings to choose from. Some popular ones include the Sicilian Defense, the Ruy Lopez, and the Queen's Gambit. Which one would you like to know more about?"
    } else if (lowerInput.includes('endgame')) {
      return "Endgame strategy is crucial in chess. It's important to know basic checkmate patterns and pawn promotion tactics. Would you like some tips on improving your endgame?"
    } else if (lowerInput.includes('tactic')) {
      return "Chess tactics include forks, pins, skewers, and discovered attacks. Practicing tactics can greatly improve your game. Shall we go through some tactical exercises?"
    } else {
      return "I'm here to help with all things chess! You can ask me about openings, endgames, tactics, or general chess strategy. What would you like to know?"
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-transparent border-none shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-bold text-lg">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Gambit AI" />
            <AvatarFallback>GA</AvatarFallback>
          </Avatar>
          Gambit AI Chess Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[530px] pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="bg-white p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex w-full items-center space-x-2"
        >
          <Input
            id="message"
            placeholder="Ask about chess..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow placeholder:text-black"
          />
          <Button type="submit" size="icon">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}