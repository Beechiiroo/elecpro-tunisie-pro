import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  Search, 
  Filter, 
  Calculator, 
  CheckCircle, 
  Clock,
  Zap,
  Star,
  ArrowRight
} from "lucide-react"

export default function Pricing() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const pricingData = [
    {
      category: "Dépannage",
      service: "Dépannage 24h/24",
      price: "60 TND",
      unit: "Intervention",
      description: "Diagnostic et réparation simple",
      urgent: true
    },
    {
      category: "Installation",
      service: "Prise murale standard",
      price: "25 TND",
      unit: "Unité",
      description: "Pose d'une prise avec câblage",
      urgent: false
    },
    {
      category: "Installation",
      service: "Interrupteur simple",
      price: "20 TND",
      unit: "Unité",
      description: "Installation interrupteur va-et-vient",
      urgent: false
    },
    {
      category: "Installation",
      service: "Point lumineux LED",
      price: "35 TND",
      unit: "Unité",
      description: "Spot LED avec câblage",
      urgent: false
    },
    {
      category: "Tableau",
      service: "Tableau électrique complet",
      price: "450 TND",
      unit: "Installation",
      description: "Tableau 3 rangées avec disjoncteurs",
      urgent: false
    },
    {
      category: "Tableau",
      service: "Disjoncteur différentiel",
      price: "80 TND",
      unit: "Unité",
      description: "30mA avec pose et raccordement",
      urgent: false
    },
    {
      category: "Sécurité",
      service: "Caméra IP extérieure",
      price: "300 TND",
      unit: "Unité",
      description: "Installation complète avec configuration",
      urgent: false
    },
    {
      category: "Sécurité",
      service: "Interphone vidéo",
      price: "250 TND",
      unit: "Installation",
      description: "Pose et configuration complète",
      urgent: false
    },
    {
      category: "Domotique",
      service: "Éclairage intelligent",
      price: "Sur devis",
      unit: "Installation",
      description: "Système complet maison connectée",
      urgent: false
    },
    {
      category: "Domotique",
      service: "Thermostat connecté",
      price: "180 TND",
      unit: "Installation",
      description: "Pose et configuration WiFi",
      urgent: false
    },
    {
      category: "Maintenance",
      service: "Contrôle installation",
      price: "80 TND",
      unit: "Visite",
      description: "Vérification complète + rapport",
      urgent: false
    },
    {
      category: "Maintenance",
      service: "Nettoyage tableau",
      price: "50 TND",
      unit: "Intervention",
      description: "Nettoyage et resserrage connexions",
      urgent: false
    }
  ]

  const categories = [
    { value: "all", label: "Tous les services" },
    { value: "Dépannage", label: "Dépannage" },
    { value: "Installation", label: "Installation" },
    { value: "Tableau", label: "Tableau électrique" },
    { value: "Sécurité", label: "Sécurité" },
    { value: "Domotique", label: "Domotique" },
    { value: "Maintenance", label: "Maintenance" }
  ]

  const packages = [
    {
      name: "Pack Basique",
      price: "150 TND",
      description: "Idéal pour les petites interventions",
      features: [
        "2 prises murales",
        "1 interrupteur",
        "Vérification tableau",
        "Petit matériel inclus"
      ],
      popular: false
    },
    {
      name: "Pack Confort",
      price: "350 TND",
      description: "Solution complète pour l'habitat",
      features: [
        "5 prises murales",
        "3 interrupteurs",
        "2 points lumineux",
        "Diagnostic complet",
        "Garantie 1 an"
      ],
      popular: true
    },
    {
      name: "Pack Premium",
      price: "Sur devis",
      description: "Installation complète et domotique",
      features: [
        "Installation sur mesure",
        "Domotique avancée",
        "Sécurité intégrée",
        "Maintenance incluse",
        "Garantie 2 ans"
      ],
      popular: false
    }
  ]

  const filteredPricing = pricingData.filter(item => {
    const matchesSearch = item.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">
            <Calculator className="w-3 h-3 mr-1" />
            Tarifs Transparents
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Nos Tarifs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des prix clairs et compétitifs pour tous vos besoins électriques
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  <Star className="w-3 h-3 mr-1" />
                  Populaire
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                <p className="text-muted-foreground">{pkg.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${pkg.popular ? 'shadow-glow' : ''}`} 
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  {pkg.price === "Sur devis" ? "Demander un devis" : "Choisir ce pack"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <CardTitle>Tarifs détaillés par service</CardTitle>
                <p className="text-muted-foreground">Prix indicatifs - Devis gratuit sur demande</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Rechercher un service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category.value}
                      variant={selectedCategory === category.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.value)}
                      className="whitespace-nowrap"
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Prix</TableHead>
                    <TableHead>Unité</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPricing.map((item, index) => (
                    <TableRow key={index} className={item.urgent ? "bg-red-50/50 dark:bg-red-950/20" : ""}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {item.urgent && <Clock className="w-4 h-4 text-red-500" />}
                          {item.service}
                          {item.urgent && <Badge variant="destructive" className="text-xs">24h/24</Badge>}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{item.description}</TableCell>
                      <TableCell className="font-semibold text-primary">{item.price}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Devis
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {filteredPricing.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                Aucun service trouvé pour "{searchTerm}"
              </div>
            )}
          </CardContent>
        </Card>

        {/* Important Notes */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-blue-500" />
              Inclus dans nos tarifs
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Déplacement dans la région de Tunis</li>
              <li>• Diagnostic initial gratuit</li>
              <li>• Petit matériel (dominos, gaines, etc.)</li>
              <li>• Nettoyage du chantier</li>
              <li>• Garantie sur la main d'œuvre</li>
            </ul>
          </Card>
          
          <Card className="p-6 bg-orange-50/50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
            <h3 className="font-semibold mb-3 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-orange-500" />
              Tarifs urgence
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Majoration 50% les week-ends</li>
              <li>• Majoration 100% les jours fériés</li>
              <li>• Intervention 24h/24 disponible</li>
              <li>• Devis d'urgence par téléphone</li>
              <li>• Paiement sécurisé sur place</li>
            </ul>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-primary text-white p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Besoin d'un devis personnalisé ?</h3>
            <p className="mb-6 opacity-90">
              Chaque projet est unique. Contactez-nous pour un devis gratuit et détaillé adapté à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-glow">
                <Calculator className="w-4 h-4 mr-2" />
                Devis gratuit
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Appeler maintenant
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}