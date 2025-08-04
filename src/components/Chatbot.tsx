import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone,
  Clock,
  Zap,
  Calculator,
  Minimize2,
  Maximize2
} from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
  quickActions?: string[]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel d'ÉlecPro Tunisie. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
      timestamp: new Date(),
      quickActions: ["Devis gratuit", "Urgence", "Nos services", "Tarifs"]
    }
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickResponses = {
    "Devis gratuit": {
      text: "Pour un devis gratuit, j'ai besoin de quelques informations :\n\n• Type d'intervention souhaitée\n• Nombre de points (prises, interrupteurs)\n• Urgence ou rendez-vous programmé\n• Votre localisation à Tunis\n\nVoulez-vous remplir le formulaire de devis ou préférez-vous m'appeler directement ?",
      actions: ["Formulaire devis", "Appeler maintenant"]
    },
    "Urgence": {
      text: "🚨 URGENCE ÉLECTRIQUE 24h/24\n\nJe vous mets en relation immédiatement :\n\n📞 Appelez : +216 XX XXX XXX\n💬 WhatsApp : Réponse instantanée\n\nTypes d'urgences :\n• Panne de courant\n• Court-circuit\n• Disjoncteur qui saute\n• Odeur de brûlé\n• Étincelles",
      actions: ["Appeler urgence", "WhatsApp"]
    },
    "Nos services": {
      text: "⚡ NOS SERVICES ÉLECTRIQUES :\n\n🏠 Installation complète\n🔧 Dépannage 24h/24\n🛡️ Mise aux normes NFC 15-100\n🏡 Domotique & maison connectée\n📹 Sécurité & vidéosurveillance\n🔧 Maintenance préventive\n\nQuel service vous intéresse ?",
      actions: ["Installation", "Dépannage", "Domotique", "Sécurité"]
    },
    "Tarifs": {
      text: "💰 TARIFS TRANSPARENTS :\n\n• Dépannage 24h/24 : à partir de 60 TND\n• Prise murale : 25 TND\n• Interrupteur : 20 TND\n• Tableau électrique complet : 450 TND\n• Caméra IP : 300 TND\n\n✅ Déplacement gratuit dans le Grand Tunis\n✅ Devis gratuit et sans engagement",
      actions: ["Voir tous les tarifs", "Demander devis"]
    }
  }

  const handleSendMessage = () => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setMessage("")

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Merci pour votre message. Un de nos experts vous contactera bientôt pour vous aider avec votre demande."
      let actions: string[] = []

      // Simple keyword matching for demo
      const lowerMessage = message.toLowerCase()
      if (lowerMessage.includes("urgence") || lowerMessage.includes("urgent")) {
        botResponse = quickResponses["Urgence"].text
        actions = quickResponses["Urgence"].actions
      } else if (lowerMessage.includes("devis") || lowerMessage.includes("prix")) {
        botResponse = quickResponses["Devis gratuit"].text
        actions = quickResponses["Devis gratuit"].actions
      } else if (lowerMessage.includes("service")) {
        botResponse = quickResponses["Nos services"].text
        actions = quickResponses["Nos services"].actions
      } else if (lowerMessage.includes("tarif") || lowerMessage.includes("coût")) {
        botResponse = quickResponses["Tarifs"].text
        actions = quickResponses["Tarifs"].actions
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
        quickActions: actions.length > 0 ? actions : ["Devis gratuit", "Nos services", "Appeler"]
      }

      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const handleQuickAction = (action: string) => {
    if (quickResponses[action as keyof typeof quickResponses]) {
      const response = quickResponses[action as keyof typeof quickResponses]
      const botMessage: Message = {
        id: messages.length + 1,
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        quickActions: response.actions
      }
      setMessages(prev => [...prev, botMessage])
    } else {
      // Handle other actions
      const userMessage: Message = {
        id: messages.length + 1,
        text: action,
        isBot: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])
      
      setTimeout(() => {
        const botMessage: Message = {
          id: messages.length + 2,
          text: `Excellent choix ! Je vous mets en relation avec notre expert pour "${action}". Vous pouvez aussi nous appeler directement au +216 XX XXX XXX.`,
          isBot: true,
          timestamp: new Date(),
          quickActions: ["Appeler maintenant", "Formulaire contact"]
        }
        setMessages(prev => [...prev, botMessage])
      }, 800)
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-glow animate-pulse z-50 bg-primary hover:bg-primary-hover"
        size="lg"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    )
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    } shadow-2xl`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-primary text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <CardTitle className="text-sm">Assistant ÉlecPro</CardTitle>
            <div className="flex items-center text-xs opacity-90">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
              En ligne
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-8 h-8 p-0 text-white hover:bg-white/20"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 p-0 text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="flex flex-col h-80 p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.isBot 
                    ? 'bg-muted text-foreground' 
                    : 'bg-primary text-white'
                }`}>
                  <div className="flex items-start space-x-2">
                    {msg.isBot && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    {!msg.isBot && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-line">{msg.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {msg.timestamp.toLocaleTimeString('fr-FR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                  
                  {msg.quickActions && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {msg.quickActions.map((action, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickAction(action)}
                          className="text-xs h-7"
                        >
                          {action}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tapez votre message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Quick Action Badges */}
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge 
                variant="outline" 
                className="text-xs cursor-pointer hover:bg-red-50 hover:border-red-200"
                onClick={() => handleQuickAction("Urgence")}
              >
                <Clock className="w-3 h-3 mr-1" />
                Urgence
              </Badge>
              <Badge 
                variant="outline" 
                className="text-xs cursor-pointer hover:bg-blue-50 hover:border-blue-200"
                onClick={() => handleQuickAction("Devis gratuit")}
              >
                <Calculator className="w-3 h-3 mr-1" />
                Devis
              </Badge>
              <Badge 
                variant="outline" 
                className="text-xs cursor-pointer hover:bg-green-50 hover:border-green-200"
                onClick={() => window.open('tel:+216XXXXXXX')}
              >
                <Phone className="w-3 h-3 mr-1" />
                Appel
              </Badge>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}