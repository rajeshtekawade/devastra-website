"use client"

import type React from "react"
<<<<<<< HEAD
=======

>>>>>>> 3821f0d8a110f5096ffd449cd4d18d9246bf1f4d
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"

<<<<<<< HEAD
// ✅ Update the path to your actual geminiService.ts file
import { getGeminiResponse } from "./geminiServices"

=======
>>>>>>> 3821f0d8a110f5096ffd449cd4d18d9246bf1f4d
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      message: "Hi there! How can I help you today?",
      timestamp: new Date(),
    },
  ])

<<<<<<< HEAD
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    const userMessage = {
      sender: "user",
      message: message,
      timestamp: new Date(),
    }

    // Show user message
    setChatHistory((prev) => [...prev, userMessage])
    setMessage("")

    try {
      const botReply = await getGeminiResponse(message)

      const botMessage = {
        sender: "bot",
        message: botReply || "Sorry, I couldn't understand that.",
        timestamp: new Date(),
      }

      setChatHistory((prev) => [...prev, botMessage])
    } catch (error) {
=======
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to chat
    setChatHistory([
      ...chatHistory,
      {
        sender: "user",
        message: message,
        timestamp: new Date(),
      },
    ])

    // Simulate bot response
    setTimeout(() => {
>>>>>>> 3821f0d8a110f5096ffd449cd4d18d9246bf1f4d
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "bot",
<<<<<<< HEAD
          message: "Oops! Something went wrong. Please try again.",
          timestamp: new Date(),
        },
      ])
    }
=======
          message: "Thank you for your message! Our team will get back to you shortly.",
          timestamp: new Date(),
        },
      ])
    }, 1000)

    setMessage("")
>>>>>>> 3821f0d8a110f5096ffd449cd4d18d9246bf1f4d
  }

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open ApX Engine</span>
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 shadow-xl border-gray-200 dark:border-gray-800 z-50">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-t-lg">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">ApX Engine - AI Assistant</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close chat</span>
              </Button>
            </div>
            <CardDescription className="text-gray-100">DevAstra Tech's proprietary AI assistant</CardDescription>
          </CardHeader>
          <CardContent className="p-4 h-80 overflow-y-auto">
            <div className="space-y-4">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      chat.sender === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    }`}
                  >
<<<<<<< HEAD
                    <p className="text-sm whitespace-pre-wrap">{chat.message}</p>
=======
                    <p className="text-sm">{chat.message}</p>
>>>>>>> 3821f0d8a110f5096ffd449cd4d18d9246bf1f4d
                    <p className="text-xs mt-1 opacity-70">
                      {chat.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t p-3">
            <div className="w-full">
              <div className="text-xs text-gray-400 mb-2 flex items-center">
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-0.5 rounded text-[10px] font-medium">
<<<<<<< HEAD
                  Powered by Gemini
=======
                  Powered by ApX Engine
>>>>>>> 3821f0d8a110f5096ffd449cd4d18d9246bf1f4d
                </span>
              </div>
              <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon" className="h-10 w-10">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
