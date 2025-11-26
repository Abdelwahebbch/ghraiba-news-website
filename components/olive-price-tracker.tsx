"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function OlivePriceTracker() {
  const priceData = [
    { date: "20 نوفمبر", price: 45.2 },
    { date: "21 نوفمبر", price: 46.8 },
    { date: "22 نوفمبر", price: 44.5 },
    { date: "23 نوفمبر", price: 47.3 },
    { date: "24 نوفمبر", price: 46.1 },
    { date: "25 نوفمبر", price: 48.5 },
    { date: "26 نوفمبر", price: 47.8 },
  ]

  const currentPrice = priceData[priceData.length - 1].price
  const previousPrice = priceData[priceData.length - 2].price
  const change = currentPrice - previousPrice
  const percentChange = ((change / previousPrice) * 100).toFixed(2)

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">سعر الزيتون اليومي</h2>
        <p className="text-muted-foreground">متابعة أسعار الزيتون في حكومة غيبة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">السعر الحالي</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{currentPrice.toFixed(2)} دد</div>
            <p className="text-xs text-muted-foreground mt-1">دينار ديناري للكيلوغرام</p>
          </CardContent>
        </Card>

        <Card className={`bg-card border-border ${change >= 0 ? "border-green-500/30" : "border-red-500/30"}`}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">التغير</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
              {change >= 0 ? "+" : ""}
              {change.toFixed(2)} دد
            </div>
            <p className={`text-xs mt-1 ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
              {change >= 0 ? "+" : ""}
              {percentChange}%
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">المدى الأسبوعي</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {Math.min(...priceData.map((d) => d.price)).toFixed(2)} -{" "}
              {Math.max(...priceData.map((d) => d.price)).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">أدنى وأعلى سعر</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>رسم بياني لتطور الأسعار</CardTitle>
          <CardDescription>تطور سعر الزيتون خلال الأسبوع الحالي</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="var(--color-primary)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-primary)", r: 5 }}
                  activeDot={{ r: 7 }}
                  name="السعر (دينار)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
