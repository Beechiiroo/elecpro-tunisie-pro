import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin,
  Zap,
  Heart
} from "lucide-react"
import { useLanguage } from "@/components/ui/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  const services = [
    "Installation électrique",
    "Dépannage 24h/24", 
    "Domotique",
    "Sécurité & alarmes",
    "Maintenance"
  ]

  const quickLinks = [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    <footer className="bg-electric-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ÉlecPro Tunisie</h3>
                <p className="text-gray-300 text-sm">Électricien Expert</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre électricien de confiance à Tunis. Service professionnel, 
              intervention rapide et tarifs transparents depuis plus de 10 ans.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <h5 className="font-medium mb-2 text-sm">Légal</h5>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Mentions légales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Confidentialité</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-gray-300 text-sm">+216 XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 text-sm">WhatsApp 24h/24</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-gray-300 text-sm">contact@elecpro-tunisie.tn</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-gray-300 text-sm">Tunis & environs</span>
              </div>
            </div>
            <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 ÉlecPro Tunisie - Aymen Ben Ali. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            {t("footer.developed")} <Heart className="w-3 h-3 mx-1 text-red-500" /> beeechiiirooo
          </p>
        </div>
      </div>
    </footer>
  )
}