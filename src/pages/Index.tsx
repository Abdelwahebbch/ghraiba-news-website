import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceCard from "@/components/PriceCard";
import PriceChart from "@/components/PriceChart";
import NewsCard from "@/components/NewsCard";

const newsArticles = [
  {
    title: "La récolte d'olives 2024 s'annonce exceptionnelle en Méditerranée",
    excerpt: "Les producteurs d'huile d'olive de la région méditerranéenne prévoient une récolte record cette année, grâce à des conditions climatiques favorables et à de nouvelles techniques de culture.",
    date: "14 Décembre 2024",
    category: "Production",
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=600&fit=crop",
    featured: true
  },
  {
    title: "Les prix de l'huile d'olive se stabilisent après une année volatile",
    excerpt: "Après des mois de fluctuations importantes, le marché montre des signes de stabilisation.",
    date: "13 Décembre 2024",
    category: "Marché",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop"
  },
  {
    title: "Nouvelles normes de qualité pour l'huile d'olive extra vierge",
    excerpt: "L'Union européenne renforce ses critères de qualité pour protéger les consommateurs.",
    date: "12 Décembre 2024",
    category: "Réglementation",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
  },
  {
    title: "Innovation : l'intelligence artificielle au service des oliveraies",
    excerpt: "Des startups développent des solutions technologiques pour optimiser la production.",
    date: "11 Décembre 2024",
    category: "Innovation",
    imageUrl: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=400&h=400&fit=crop"
  },
  {
    title: "Export record d'huile d'olive vers l'Asie",
    excerpt: "La demande asiatique continue de croître, offrant de nouvelles opportunités aux producteurs.",
    date: "10 Décembre 2024",
    category: "Commerce",
    imageUrl: "https://images.unsplash.com/photo-1601063476271-a159e7a9e9a7?w=400&h=400&fit=crop"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in-up">
                Suivez le marché de{" "}
                <span className="text-gradient-olive">l'huile d'olive</span>
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
                Prix en temps réel, analyses et actualités du secteur oléicole
              </p>
            </div>
          </div>
        </section>

        {/* Price Section */}
        <section id="prix" className="pb-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6">
              <PriceCard currentPrice={8.62} previousPrice={8.58} />
              <PriceChart />
            </div>
          </div>
        </section>

        {/* Historical Stats */}
        <section id="historique" className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-card rounded-xl p-6 border border-border text-center animate-fade-in-up">
                <p className="text-sm text-muted-foreground mb-1">Variation 7j</p>
                <p className="font-serif text-2xl font-bold text-chart-positive">+2.0%</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center animate-fade-in-up animation-delay-100">
                <p className="text-sm text-muted-foreground mb-1">Variation 30j</p>
                <p className="font-serif text-2xl font-bold text-chart-positive">+4.5%</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center animate-fade-in-up animation-delay-200">
                <p className="text-sm text-muted-foreground mb-1">Variation 1 an</p>
                <p className="font-serif text-2xl font-bold text-chart-positive">+19.7%</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center animate-fade-in-up animation-delay-300">
                <p className="text-sm text-muted-foreground mb-1">Volume échangé</p>
                <p className="font-serif text-2xl font-bold text-foreground">2.4M L</p>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="actualites" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Dernières Actualités
                </h2>
                <p className="text-muted-foreground mt-1">
                  Restez informé des dernières nouvelles du secteur
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Featured Article */}
              <div className="lg:col-span-2">
                <NewsCard {...newsArticles[0]} />
              </div>

              {/* Side Articles */}
              <div className="space-y-4">
                {newsArticles.slice(1, 4).map((article, index) => (
                  <NewsCard key={index} {...article} />
                ))}
              </div>
            </div>

            {/* More Articles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {newsArticles.slice(1).map((article, index) => (
                <NewsCard key={index} {...article} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
