import { Product } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="product-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-neutral-dark mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary">{product.price} €</span>
          <StockBadge stock={product.stock} />
        </div>
      </CardContent>
    </Card>
  );
};

const StockBadge = ({ stock }: { stock: string }) => {
  let bgColor, textColor;
  
  switch (stock) {
    case "En stock":
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      break;
    case "Derniers exemplaires":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      break;
    case "Rupture de stock":
      bgColor = "bg-red-100";
      textColor = "text-red-800";
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-800";
  }
  
  return (
    <Badge variant="outline" className={`${bgColor} ${textColor} border-none`}>
      {stock}
    </Badge>
  );
};

export default ProductCard;
