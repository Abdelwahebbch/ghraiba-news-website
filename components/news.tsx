import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function News() {
  const newsItems = [
    {
      id: 1,
      title: "افتتاح مصنع تعبئة الزيتون الجديد",
      description: "تم افتتاح مصنع حديث لتعبئة وتغليف الزيتون بتقنيات عالمية، ما سيحسن من جودة الإنتاج",
      date: "25 نوفمبر 2025",
      category: "تطور اقتصادي",
      image: "/olive-oil-production-facility.jpg",
    },
    {
      id: 2,
      title: "برنامج دعم المزارعين الموسمي",
      description: "أطلقت الحكومة برنامج دعم خاص بالمزارعين لتحسين إنتاجية موسم الحصاد الحالي",
      date: "24 نوفمبر 2025",
      category: "سياسة زراعية",
      image: "/farmers-support-program.jpg",
    },
    {
      id: 3,
      title: "توقيع اتفاقية تصدير جديدة",
      description: "وقعت حكومة غيبة اتفاقية تصدير جديدة مع الأسواق الأوروبية لتصدير الزيتون والزيت",
      date: "23 نوفمبر 2025",
      category: "تجارة خارجية",
      image: "/export-agreement-signing.jpg",
    },
    {
      id: 4,
      title: "إطلاق منصة رقمية للمزارعين",
      description: "تم إطلاق منصة رقمية جديدة تساعد المزارعين على بيع منتجاتهم مباشرة للمستهلكين",
      date: "22 نوفمبر 2025",
      category: "تكنولوجيا",
      image: "/digital-platform-farmers.jpg",
    },
  ]

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">آخر الأخبار</h2>
        <p className="text-muted-foreground">أحدث الأخبار والتطورات في حكومة غيبة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((news) => (
          <Card
            key={news.id}
            className="bg-card border-border hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {news.category}
                </span>
                <span className="text-xs text-muted-foreground">{news.date}</span>
              </div>
              <CardTitle className="text-xl">{news.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm leading-relaxed">{news.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
