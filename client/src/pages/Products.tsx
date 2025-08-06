import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Filter, Grid, List, Star, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Mock product data
const products = [
  {
    id: "lucien",
    name: "Lucien",
    price: 95,
    colors: ["amber-800", "black", "blue-900"],
    category: "Vue",
    material: "Acétate",
    shape: "Rond",
    isNew: true,
    isBestseller: false,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "nadia",
    name: "Nadia",
    price: 95,
    colors: ["gray-600", "pink-300", "purple-400"],
    category: "Vue",
    material: "Métal",
    shape: "Cat-eye",
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "tobias",
    name: "Tobias",
    price: 95,
    colors: ["gray-200", "amber-600", "gray-800"],
    category: "Vue",
    material: "Titane",
    shape: "Rectangulaire",
    isNew: false,
    isBestseller: false,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "reiner",
    name: "Reiner",
    price: 95,
    colors: ["gray-400", "amber-700"],
    category: "Vue",
    material: "Acétate",
    shape: "Carré",
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: "elena",
    name: "Elena",
    price: 120,
    colors: ["rose-400", "purple-500", "gold-400"],
    category: "Solaire",
    material: "Acétate",
    shape: "Aviateur",
    isNew: true,
    isBestseller: false,
    rating: 4.9,
    reviews: 67,
  },
  {
    id: "marcus",
    name: "Marcus",
    price: 110,
    colors: ["black", "navy-800", "gray-700"],
    category: "Solaire",
    material: "Métal",
    shape: "Sport",
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviews: 142,
  },
  {
    id: "sophia",
    name: "Sophia",
    price: 105,
    colors: ["mint-400", "blue-400", "pink-400"],
    category: "Vue",
    material: "Bio-acétate",
    shape: "Rond",
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviews: 78,
  },
  {
    id: "alex",
    name: "Alex",
    price: 85,
    colors: ["gray-600", "blue-600"],
    category: "Vue",
    material: "Plastique",
    shape: "Carré",
    isNew: false,
    isBestseller: false,
    rating: 4.6,
    reviews: 94,
  },
];

const categories = ["Tous", "Vue", "Solaire"];
const shapes = [
  "Tous",
  "Rond",
  "Carré",
  "Rectangulaire",
  "Cat-eye",
  "Aviateur",
  "Sport",
];
const materials = [
  "Tous",
  "Acétate",
  "Métal",
  "Titane",
  "Bio-acétate",
  "Plastique",
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedShape, setSelectedShape] = useState("Tous");
  const [selectedMaterial, setSelectedMaterial] = useState("Tous");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "Tous" || product.category === selectedCategory) &&
      (selectedShape === "Tous" || product.shape === selectedShape) &&
      (selectedMaterial === "Tous" || product.material === selectedMaterial)
    );
  });

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      "amber-800": "bg-amber-800",
      black: "bg-black",
      "blue-900": "bg-blue-900",
      "gray-600": "bg-gray-600",
      "pink-300": "bg-pink-300",
      "purple-400": "bg-purple-400",
      "gray-200": "bg-gray-200",
      "amber-600": "bg-amber-600",
      "gray-800": "bg-gray-800",
      "gray-400": "bg-gray-400",
      "amber-700": "bg-amber-700",
      "rose-400": "bg-rose-400",
      "purple-500": "bg-purple-500",
      "gold-400": "bg-gold-400",
      "navy-800": "bg-navy-800",
      "gray-700": "bg-gray-700",
      "mint-400": "bg-mint-400",
      "blue-400": "bg-blue-400",
      "pink-400": "bg-pink-400",
      "blue-600": "bg-blue-600",
    };
    return colorMap[color] || "bg-gray-400";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-950 to-navy-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Collection{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-400">
                Premium
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme exclusive de lunettes de vue et solaires.
              Design moderne, qualité premium et confort exceptionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtres
              </Button>
              <span className="text-gray-600 font-lato">
                {filteredProducts.length} produit
                {filteredProducts.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="px-3"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="px-3"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center space-x-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Catégorie
              </label>
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Forme
              </label>
              <div className="flex space-x-2">
                {shapes.slice(0, 4).map((shape) => (
                  <Button
                    key={shape}
                    variant={selectedShape === shape ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedShape(shape)}
                    className="text-sm"
                  >
                    {shape}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Matériau
              </label>
              <div className="flex space-x-2">
                {materials.slice(0, 4).map((material) => (
                  <Button
                    key={material}
                    variant={
                      selectedMaterial === material ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedMaterial(material)}
                    className="text-sm"
                  >
                    {material}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden space-y-4 mt-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Catégorie
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Forme
                </label>
                <div className="flex flex-wrap gap-2">
                  {shapes.map((shape) => (
                    <Button
                      key={shape}
                      variant={selectedShape === shape ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedShape(shape)}
                    >
                      {shape}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    {/* Product Image */}
                    <div className="relative bg-white p-8 h-64 flex items-center justify-center">
                      {/* Badges */}
                      <div className="absolute top-4 left-4 space-y-2">
                        {product.isNew && (
                          <Badge className="bg-mint-500 text-white text-xs">
                            Nouveau
                          </Badge>
                        )}
                        {product.isBestseller && (
                          <Badge className="bg-gold-500 text-white text-xs">
                            Bestseller
                          </Badge>
                        )}
                      </div>

                      {/* Wishlist Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 w-8 h-8 hover:bg-white/80"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>

                      {/* Product SVG */}
                      <svg viewBox="0 0 200 80" className="w-32 h-16">
                        <circle
                          cx="50"
                          cy="40"
                          r="25"
                          fill="none"
                          stroke="#4A5568"
                          strokeWidth="2"
                        />
                        <circle
                          cx="150"
                          cy="40"
                          r="25"
                          fill="none"
                          stroke="#4A5568"
                          strokeWidth="2"
                        />
                        <line
                          x1="75"
                          y1="40"
                          x2="125"
                          y2="40"
                          stroke="#4A5568"
                          strokeWidth="2"
                        />
                        <line
                          x1="25"
                          y1="40"
                          x2="15"
                          y2="40"
                          stroke="#4A5568"
                          strokeWidth="2"
                        />
                        <line
                          x1="175"
                          y1="40"
                          x2="185"
                          y2="40"
                          stroke="#4A5568"
                          strokeWidth="2"
                        />
                      </svg>

                      {/* Quick Actions */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          className="bg-navy-900 hover:bg-navy-800 text-white mr-2"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Essayer
                        </Button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 bg-white">
                      <div className="mb-3">
                        <Link to={`/produits/${product.id}`}>
                          <h3 className="font-playfair font-semibold text-lg text-navy-900 hover:text-navy-700 transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600 font-lato">
                          {product.material} • {product.shape}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-gold-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 font-lato">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Colors & Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {product.colors.map((color, index) => (
                            <span
                              key={index}
                              className={`w-5 h-5 ${getColorClass(color)} rounded-full border-2 border-white shadow-sm`}
                            />
                          ))}
                        </div>
                        <span className="text-lg font-semibold text-navy-900">
                          €{product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden border-0 shadow-lg"
                >
                  <div className="flex items-center p-6">
                    <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mr-6">
                      <svg viewBox="0 0 200 80" className="w-16 h-8">
                        <circle
                          cx="50"
                          cy="40"
                          r="25"
                          fill="none"
                          stroke="#4A5568"
                          strokeWidth="2"
                        />
                        <circle
                          cx="150"
                          cy="40"
                          r="25"
                          fill="none"
                          stroke="#4A5568"
                          strokeWidth="2"
                        />
                        <line
                          x1="75"
                          y1="40"
                          x2="125"
                          y2="40"
                          stroke="#4A5568"
                          strokeWidth="2"
                        />
                        <line
                          x1="25"
                          y1="40"
                          x2="15"
                          y2="40"
                          stroke="#4A5568"
                          strokeWidth="2"
                        />
                        <line
                          x1="175"
                          y1="40"
                          x2="185"
                          y2="40"
                          stroke="#4A5568"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Link to={`/produits/${product.id}`}>
                          <h3 className="font-playfair font-semibold text-xl text-navy-900 hover:text-navy-700 transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        {product.isNew && (
                          <Badge className="bg-mint-500 text-white text-xs">
                            Nouveau
                          </Badge>
                        )}
                        {product.isBestseller && (
                          <Badge className="bg-gold-500 text-white text-xs">
                            Bestseller
                          </Badge>
                        )}
                      </div>

                      <p className="text-gray-600 font-lato mb-2">
                        {product.material} • {product.shape} •{" "}
                        {product.category}
                      </p>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-gold-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        <div className="flex space-x-2">
                          {product.colors.map((color, index) => (
                            <span
                              key={index}
                              className={`w-4 h-4 ${getColorClass(color)} rounded-full border border-gray-300`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-semibold text-navy-900 mb-4">
                        €{product.price}
                      </div>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline">
                          <Heart className="w-4 h-4 mr-1" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-navy-900 hover:bg-navy-800 text-white"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Essayer
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
            Besoin d'aide pour choisir ?
          </h2>
          <p className="text-xl text-gray-300 font-lato mb-8 max-w-2xl mx-auto">
            Nos experts sont là pour vous conseiller et vous aider à trouver la
            paire parfaite selon vos besoins et votre style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-mint-600 hover:bg-mint-700 text-white"
            >
              Prendre rendez-vous
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white/20 hover:border-white bg-white/10"
            >
              Conseil en ligne
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
