import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const weeklyData = [
  { name: "Lun", price: 8.45 },
  { name: "Mar", price: 8.52 },
  { name: "Mer", price: 8.48 },
  { name: "Jeu", price: 8.60 },
  { name: "Ven", price: 8.55 },
  { name: "Sam", price: 8.58 },
  { name: "Dim", price: 8.62 },
];

const yearlyData = [
  { name: "Jan", price: 7.20 },
  { name: "Fév", price: 7.35 },
  { name: "Mar", price: 7.50 },
  { name: "Avr", price: 7.80 },
  { name: "Mai", price: 8.10 },
  { name: "Juin", price: 8.25 },
  { name: "Juil", price: 8.40 },
  { name: "Août", price: 8.35 },
  { name: "Sep", price: 8.50 },
  { name: "Oct", price: 8.55 },
  { name: "Nov", price: 8.58 },
  { name: "Déc", price: 8.62 },
];

type TimeRange = "week" | "year";

const PriceChart = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("week");
  const data = timeRange === "week" ? weeklyData : yearlyData;

  const minPrice = Math.min(...data.map(d => d.price)) - 0.2;
  const maxPrice = Math.max(...data.map(d => d.price)) + 0.2;

  return (
    <div className="rounded-2xl bg-card border border-border p-6 shadow-olive animate-fade-in-up animation-delay-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground">
            Évolution du Prix
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Historique des prix de l'huile d'olive
          </p>
        </div>

        <div className="flex bg-muted rounded-lg p-1">
          <button
            onClick={() => setTimeRange("week")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              timeRange === "week"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Cette Semaine
          </button>
          <button
            onClick={() => setTimeRange("year")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              timeRange === "year"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Cette Année
          </button>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(82, 45%, 35%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(82, 45%, 35%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(45, 25%, 85%)" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(45, 15%, 45%)', fontSize: 12 }}
            />
            <YAxis 
              domain={[minPrice, maxPrice]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(45, 15%, 45%)', fontSize: 12 }}
              tickFormatter={(value) => `${value.toFixed(2)}€`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(45, 30%, 97%)',
                border: '1px solid hsl(45, 25%, 85%)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              formatter={(value: number) => [`${value.toFixed(2)} €/L`, 'Prix']}
              labelStyle={{ color: 'hsl(45, 20%, 15%)', fontWeight: 600 }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="hsl(82, 45%, 35%)"
              strokeWidth={3}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Min</p>
          <p className="font-serif text-lg font-semibold text-foreground">
            {Math.min(...data.map(d => d.price)).toFixed(2)} €
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Moyenne</p>
          <p className="font-serif text-lg font-semibold text-foreground">
            {(data.reduce((a, b) => a + b.price, 0) / data.length).toFixed(2)} €
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Max</p>
          <p className="font-serif text-lg font-semibold text-foreground">
            {Math.max(...data.map(d => d.price)).toFixed(2)} €
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceChart;
