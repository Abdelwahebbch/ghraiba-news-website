export function Header() {
  return (
    <header className="border-b border-border bg-card shadow-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Ghaiba News</h1>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">أخبار حكومة غيبة والزيتون</p>
          </div>
          <div className="text-right">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold">
              تحديث يومي
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
