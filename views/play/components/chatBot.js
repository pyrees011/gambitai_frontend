import { useState, useEffect, useRef } from 'react'

// components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

// icons
import { ChevronRight } from "lucide-react"

// axios
import { instance } from '@/utils/axios'

export default function ChatBot({ chatName }) {
  const [messages, setMessages] = useState([
    { sender: "bot", message: "Hello! I'm Gambit AI, your chess assistant. How can I help you today?", timestamp: new Date() },
  ])
  const [input, setInput] = useState('')
  const [streamingMessage, setStreamingMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const wsRef = useRef(null)
  const scrollAreaRef = useRef(null)
  const typingTimeoutRef = useRef(null)

  useEffect(() => {
    instance.get(`/chat/${chatName}`).then((response) => {
      if (response.data.chat) {
        setMessages(response.data.chat);
      }
      console.log('Chat messages fetched:', messages);
    }).catch((error) => {
      console.error('Error fetching chat messages:', error);
    })}, []);


  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8000/api/v1/ws`);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const message = event.data;
      setIsTyping(true);
      setStreamingMessage((prev) => prev + message);

      // Clear any existing timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      // Set a new timeout
      typingTimeoutRef.current = setTimeout(() => {
        setIsTyping(false);
      }, 500); // Adjust this value as needed
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, streamingMessage]);

  const handleSend = () => {
    if (input.trim()) {
      if (wsRef.current.readyState === WebSocket.OPEN) {
        const newMessage = { message: input, sender: 'user', timestamp: new Date(), chatName: chatName };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInput('');
        setStreamingMessage('');
        setIsTyping(true);
        wsRef.current.send(JSON.stringify(newMessage));
      } else {
        console.error("WebSocket is not open. ReadyState:", wsRef.current.readyState);
      }
    }
  };

  useEffect(() => {
    if (streamingMessage && !isTyping) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', message: streamingMessage, timestamp: new Date() }
      ]);
      setStreamingMessage('');
    }
  }, [streamingMessage, isTyping]);

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
        <ScrollArea className="h-[530px] pr-4" ref={scrollAreaRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}
              >
                {message.message}
              </div>
            </div>
          ))}
          {streamingMessage && (
            <div className="mb-4 text-left">
              <div className="inline-block p-2 rounded-lg bg-muted">
                {streamingMessage}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>

      <CardFooter className="bg-white p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex w-full items-center space-x-2"
        >
          <Input
            id="message"
            placeholder="Ask about chess..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow placeholder:text-black"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
          />
          <Button type="submit" size="icon" onClick={handleSend}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}