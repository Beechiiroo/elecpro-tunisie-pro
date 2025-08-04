import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Calendar,
  QrCode,
  Star
} from "lucide-react"
import { useLanguage } from "@/components/ui/language-provider"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    urgent: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "+216 XX XXX XXX",
      description: "Appelez-nous directement",
      action: "Appeler",
      urgent: false
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+216 XX XXX XXX",
      description: "Chat instantané 24h/24",
      action: "WhatsApp",
      urgent: true
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@elecpro-tunisie.tn",
      description: "Réponse sous 2h",
      action: "Email",
      urgent: false
    },
    {
      icon: MapPin,
      title: "Zone d'intervention",
      info: "Tunis & environs",
      description: "Déplacement gratuit",
      action: "Carte",
      urgent: false
    }
  ]

  const services = [
    "Installation électrique",
    "Dépannage d'urgence",
    "Mise aux normes",
    "Domotique",
    "Sécurité & alarmes",
    "Maintenance",
    "Autre"
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">
            <Phone className="w-3 h-3 mr-1" />
            Contactez-nous
          </Badge>
          <h2 className="text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Intervention rapide à Tunis. Devis gratuit par téléphone ou WhatsApp
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Aymen Ben Ali</h3>
              <p className="text-muted-foreground mb-6">
                Électricien expert disponible 24h/24 pour tous vos besoins électriques à Tunis et ses environs.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className={`p-4 hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${contact.urgent ? 'ring-2 ring-green-500/20 bg-green-50/50 dark:bg-green-950/20' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      contact.urgent ? 'bg-green-500 text-white' : 'bg-primary/10 text-primary'
                    }`}>
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{contact.title}</h4>
                        {contact.urgent && <Badge className="text-xs bg-green-500">24h/24</Badge>}
                      </div>
                      <p className="text-primary font-medium">{contact.info}</p>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={contact.urgent ? 'border-green-500 text-green-600 hover:bg-green-50' : ''}
                    >
                      {contact.action}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* QR Code */}
            <Card className="p-6 text-center bg-gradient-card">
              <QrCode className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2">QR Code de contact</h4>
              <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg p-2">
                <img 
                  src="/lovable-uploads/ddb2de01-5a7c-480d-a0be-7b1c6b662562.png" 
                  alt="QR Code ÉlecPro Tunisie"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Scannez pour sauvegarder nos coordonnées
              </p>
            </Card>

            {/* Hours */}
            <Card className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 mr-2 text-blue-500" />
                <h4 className="font-semibold">Horaires</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Lun - Ven:</span>
                  <span className="font-medium">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sam:</span>
                  <span className="font-medium">8h00 - 14h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dim & Urgences:</span>
                  <span className="font-medium text-green-600">24h/24</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Demande de devis gratuit</CardTitle>
                <p className="text-muted-foreground">
                  Décrivez votre projet et recevez un devis personnalisé sous 2h
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom et prénom"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Téléphone *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+216 XX XXX XXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Type de service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg bg-background"
                      required
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description du projet *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet en détail : type d'intervention, nombre de points, urgence..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="urgent"
                      name="urgent"
                      checked={formData.urgent}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <label htmlFor="urgent" className="text-sm text-red-600 font-medium">
                      Intervention d'urgence (supplément appliqué)
                    </label>
                  </div>

                  <div className="space-y-4">
                    <Button type="submit" className="w-full shadow-glow" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer la demande
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                        Réponse sous 2h
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                        Devis gratuit
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                        Sans engagement
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <Card className="p-6 bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <div className="text-center">
                  <Phone className="w-12 h-12 mx-auto mb-3 text-red-500" />
                  <h3 className="font-semibold mb-2">Urgence électrique ?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Intervention d'urgence 24h/24
                  </p>
                  <Button className="w-full bg-red-500 hover:bg-red-600">
                    Appel d'urgence
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <div className="text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-3 text-green-500" />
                  <h3 className="font-semibold mb-2">Prendre rendez-vous</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Intervention programmée
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Réserver un créneau
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Zone d'intervention
              </CardTitle>
              <p className="text-muted-foreground">
                Nous intervenons dans tout le Grand Tunis et ses environs
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <p className="text-muted-foreground">
                    Carte Google Maps intégrée
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Tunis, Ariana, Ben Arous, Manouba
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}