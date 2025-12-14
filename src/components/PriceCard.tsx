import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface PriceCardProps {
  currentPrice: number;
  previousPrice: number;
  currency?: string;
  unit?: string;
}

const PriceCard = ({ currentPrice, previousPrice, currency = "€", unit = "L" }: PriceCardProps) => {
  const change = currentPrice - previousPrice;
  const percentChange = ((change / previousPrice) * 100).toFixed(2);
  const isPositive = change > 0;
  const isNeutral = change === 0;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-olive animate-fade-in-up">
      <div className="absolute top-0 right-0 w-32 h-32 gradient-olive opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
          Prix de l'huile d'olive aujourd'hui
        </p>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-5xl font-serif font-bold text-foreground">
            {currentPrice.toFixed(2)}
          </span>
          <span className="text-2xl font-medium text-muted-foreground">
            {currency}/{unit}
          </span>
        </div>

        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
          isNeutral 
            ? "bg-muted text-muted-foreground"
            : isPositive 
              ? "bg-chart-negative/10 text-chart-negative" 
              : "bg-chart-positive/10 text-chart-positive"
        }`}>
          {isNeutral ? (
            <Minus className="w-4 h-4" />
          ) : isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>
            {isPositive ? "+" : ""}{change.toFixed(2)} {currency} ({isPositive ? "+" : ""}{percentChange}%)
          </span>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Mis à jour le {new Date().toLocaleDateString('fr-FR', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>
    </div>
  );
};

export default PriceCard;
