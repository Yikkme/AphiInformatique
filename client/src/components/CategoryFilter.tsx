import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@shared/data";

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState("Tous les produits");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex overflow-x-auto space-x-2 pb-4 mb-6 border-b border-gray-200">
      {categories.map((category, index) => (
        <Button
          key={index}
          variant={activeCategory === category ? "default" : "outline"}
          className={`whitespace-nowrap ${
            activeCategory === category
              ? "bg-primary text-white"
              : "bg-white text-neutral-darker hover:bg-gray-100"
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
