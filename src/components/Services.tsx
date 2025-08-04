import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  Clock, 
  Shield, 
  Home, 
  Camera, 
  Settings, 
  Wrench,
  AlertTriangle,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { useLanguage } from "@/components/ui/language-provider"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Home,
      title: t("services.installation"),
      description: "Installation électrique complète pour maisons, appartements et bureaux",
      features: ["Tableaux électriques", "Prises et interrupteurs", "Éclairage LED", "Chauffage électrique"],
      price: "À partir de 450 TND",
      color: "text-blue-500",
      urgent: false
    },
    {
      icon: AlertTriangle,
      title: t("services.emergency"),
      description: "Intervention d'urgence 24h/24 pour tous vos problèmes électriques",
      features: ["Panne de courant", "Court-circuit", "Disjoncteur qui saute", "Dépannage rapide"],
      price: "À partir de 60 TND",
      color: "text-red-500",
      urgent: true
    },
    {
      icon: Shield,
      title: t("services.compliance"),
      description: "Mise aux normes NFC 15-100 et conformité Consuel",
      features: ["Diagnostic électrique", "Mise en conformité", "Certificat Consuel", "Sécurité optimale"],
      price: "Sur devis",
      color: "text-green-500",
      urgent: false
    },
    {
      icon: Settings,
      title: t("services.smart"),
      description: "Installation de systèmes domotiques et maison connectée",
      features: ["Éclairage intelligent", "Volets automatiques", "Thermostat connecté", "Contrôle à distance"],
      price: "Sur devis",
      color: "text-purple-500",
      urgent: false
    },
    {
      icon: Camera,
      title: t("services.security"),
      description: "Systèmes de sécurité, alarmes et vidéosurveillance",
      features: ["Caméras IP", "Alarme anti-intrusion", "Interphone vidéo", "Contrôle d'accès"],
      price: "À partir de 300 TND",
      color: "text-orange-500",
      urgent: false
    },
    {
      icon: Wrench,
      title: t("services.maintenance"),
      description: "Maintenance préventive et entretien de vos installations",
      features: ["Contrôle périodique", "Nettoyage tableaux", "Test sécurité", "Rapport détaillé"],
      price: "À partir de 80 TND",
      color: "text-cyan-500",
      urgent: false
    }
  ]

  const whyChooseUs = [
    "Électricien certifié et assuré",
    "Intervention rapide sous 2h",
    "Devis gratuit et transparent",
    "Garantie sur tous nos travaux",
    "Matériel de qualité professionnelle",
    "Service client 24h/24"
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">
            <Zap className="w-3 h-3 mr-1" />
            Services Professionnels
          </Badge>
          <h2 className="text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")} pour particuliers et professionnels à Tunis
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 group ${
                service.urgent ? 'ring-2 ring-red-500/20 bg-red-50/50 dark:bg-red-950/20' : ''
              }`}
            >
              {service.urgent && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white animate-pulse">
                  <Clock className="w-3 h-3 mr-1" />
                  24h/24
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Prix</div>
                    <div className="font-semibold text-primary">{service.price}</div>
                  </div>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Devis
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-card rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Pourquoi choisir ÉlecPro Tunisie ?</h3>
              <p className="text-muted-foreground mb-6">
                Notre expertise et notre engagement qualité font la différence
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Intervention d'urgence</div>
                    <div className="text-sm text-muted-foreground">Disponible 24h/24</div>
                  </div>
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </Card>
              <Card className="p-4 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Garantie travaux</div>
                    <div className="text-sm text-muted-foreground">Jusqu'à 2 ans</div>
                  </div>
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
              </Card>
              <Button className="w-full shadow-glow" size="lg">
                <Zap className="w-4 h-4 mr-2" />
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <Card className="bg-gradient-primary text-white p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-4">Urgence Électrique ?</h3>
            <p className="mb-6 opacity-90">
              Panne de courant, court-circuit, disjoncteur qui saute ? 
              Notre équipe intervient rapidement 24h/24, 7j/7 dans tout Tunis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-glow">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Appel d'urgence
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                WhatsApp 24h/24
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}