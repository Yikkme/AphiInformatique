import { useState } from "react";
import { products } from "@shared/data";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@shared/types";

const StorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous les produits");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  
  const filteredProducts = selectedCategory === "Tous les produits"
    ? products
    : products.filter(product => product.category === selectedCategory);
    
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  return (
    <div>
      {/* Store Hero Banner */}
      <section className="bg-primary py-12 md:py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Notre Boutique</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Découvrez notre sélection d'accessoires et produits informatiques de qualité
          </p>
        </div>
      </section>
      
      {/* Product Categories and Grid */}
      <section className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <CategoryFilter onCategoryChange={handleCategoryChange} />
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {currentProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mb-10">
            <nav className="inline-flex rounded-md shadow-sm">
              <Button
                variant="outline"
                size="icon"
                className="rounded-l-md"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 ? "bg-primary text-white" : ""}
                >
                  {index + 1}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-r-md"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          </div>
        )}
      </section>
    </div>
  );
};

export default StorePage;
