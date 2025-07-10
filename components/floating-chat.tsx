"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"
import { useLanguage } from "./language-provider"

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const { t } = useLanguage()

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle message sending here - integrate with your AI assistant
      console.log("Message sent:", message)
      setMessage("")
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg z-50"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Modal */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 bg-slate-900 border-slate-800 shadow-2xl z-40">
          <CardHeader className="pb-3">
            <CardTitle className="text-slate-100 text-lg">{t("chat.title")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-full pb-4">
            <div className="flex-1 bg-slate-800/50 rounded-lg p-4 mb-4 overflow-y-auto">
              <div className="text-slate-400 text-sm text-center">Chat integration ready for your AI assistant!</div>
            </div>
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("chat.placeholder")}
                className="bg-slate-800 border-slate-700 text-slate-100 flex-1"
              />
              <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  )
}
