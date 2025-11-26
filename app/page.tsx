import { Header } from "@/components/header"
import { GovermentPhotos } from "@/components/government-photos"
import { News } from "@/components/news"
import { OlivePriceTracker } from "@/components/olive-price-tracker"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Ghaiba News - أخبار غيبة",
  description: "تابع أخبار حكومة غيبة والأسعار اليومية للزيتون",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <div className="container mx-auto px-4 py-12 space-y-16">
        <GovermentPhotos />
        <OlivePriceTracker />
        <News />
      </div>
      <Footer />
    </main>
  )
}
