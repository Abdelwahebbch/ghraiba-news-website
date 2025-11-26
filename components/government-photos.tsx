export function GovermentPhotos() {
  const photos = [
    {
      id: 1,
      title: "مقر الحكومة الرئيسي",
      image: "/government-building-architecture.jpg",
    },
    {
      id: 2,
      title: "اجتماع المسؤولين",
      image: "/government-officials-meeting.jpg",
    },
    {
      id: 3,
      title: "منطقة الزراعة",
      image: "/olive-farm-landscape.jpg",
    },
  ]

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">صور من حكومة غيبة</h2>
        <p className="text-muted-foreground">صور ووثائق من أنشطة الحكومة المختلفة</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={photo.image || "/placeholder.svg"}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground text-lg">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
