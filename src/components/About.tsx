import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Clock, Users, CheckCircle, Zap } from "lucide-react"
import { useLanguage } from "@/components/ui/language-provider"

export default function About() {
  const { t } = useLanguage()

  const achievements = [
    { icon: Star, value: "500+", label: "Clients satisfaits" },
    { icon: Clock, value: "10+", label: "Années d'expérience" },
    { icon: Award, value: "100%", label: "Certifié NFC 15-100" },
    { icon: Users, value: "24h/24", label: "Service d'urgence" },
  ]

  const certifications = [
    "Certification NFC 15-100",
    "Habilitation électrique BR",
    "Formation domotique KNX",
    "Certification sécurité incendie",
  ]

  const testimonials = [
    {
      name: "Ahmed Ben Salah",
      location: "Tunis Centre",
      rating: 5,
      comment: "Service excellent, intervention rapide et travail de qualité. Je recommande vivement Aymen !",
    },
    {
      name: "Fatma Karray",
      location: "La Marsa",
      rating: 5,
      comment: "Installation domotique parfaite. Très professionnel et à l'écoute. Prix correct.",
    },
    {
      name: "Mohamed Trabelsi",
      location: "Ariana",
      rating: 5,
      comment: "Dépannage en urgence un dimanche. Arrivé rapidement, problème résolu efficacement.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo and Info */}
          <div className="space-y-8">
            <div className="relative">
              {/* Photo */}
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <img
                  src="/lovable-uploads/3c3bcf59-ba14-4ec3-9988-8c94d34093ab.png"
                  alt="Aymen Ben Ali - Électricien Expert"
                  className="w-full h-full object-cover rounded-2xl shadow-card"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-glow">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              
              {/* Floating Badge */}
              <Badge className="absolute -top-2 -left-2 bg-green-500 text-white px-3 py-1">
                <CheckCircle className="w-4 h-4 mr-1" />
                Certifié Expert
              </Badge>
            </div>

            {/* Professional Info */}
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl font-bold">{t("about.title")}</h2>
              <p className="text-xl text-primary font-semibold">{t("about.subtitle")}</p>
              
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge variant="outline">{t("about.experience")}</Badge>
                <Badge variant="outline">{t("about.certifications")}</Badge>
                <Badge variant="outline">Domotique KNX</Badge>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description")}
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <achievement.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl font-bold text-primary">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary" />
                Certifications & Formations
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* CTA */}
            <div className="flex gap-4">
              <Button className="flex-1 shadow-glow">
                Demander un devis
              </Button>
              <Button variant="outline" className="flex-1">
                Voir nos réalisations
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Ce que disent nos clients</h3>
            <p className="text-muted-foreground">Des témoignages authentiques de clients satisfaits</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}