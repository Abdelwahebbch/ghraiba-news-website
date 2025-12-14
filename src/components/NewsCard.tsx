import { Calendar, ArrowRight } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
  featured?: boolean;
}

const NewsCard = ({ title, excerpt, date, category, imageUrl, featured = false }: NewsCardProps) => {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-olive animate-fade-in-up">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider gradient-gold text-accent-foreground rounded-full mb-3">
            {category}
          </span>
          <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2 group-hover:text-gold-light transition-colors">
            {title}
          </h3>
          <p className="text-primary-foreground/80 text-sm line-clamp-2 mb-3">
            {excerpt}
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-olive transition-all duration-300 animate-fade-in-up">
      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 min-w-0">
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent mb-1">
          {category}
        </span>
        <h3 className="font-serif text-base font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          <Calendar className="w-3 h-3" />
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
