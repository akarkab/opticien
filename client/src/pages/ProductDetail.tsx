import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Star,
  Eye,
  Share2,
  ArrowLeft,
  Calendar,
  Shield,
  Truck,
  RotateCcw,
  Check,
  Plus,
  Minus,
  Camera,
} from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

// Mock product data
const products = {
  lucien: {
    id: "lucien",
    name: "Lucien",
    price: 95,
    originalPrice: 120,
    description:
      "Monture ronde intemporelle en acétate premium, alliant confort et élégance pour un style sophistiqué au quotidien.",
    category: "Vue",
    material: "Acétate premium",
    shape: "Rond",
    brand: "MouradOptic Collection",
    isNew: true,
    isBestseller: false,
    rating: 4.8,
    reviews: 124,
    colors: [
      { name: "Écaille havane", value: "amber-800", hex: "#92400e" },
      { name: "Noir mat", value: "black", hex: "#000000" },
      { name: "Bleu marine", value: "blue-900", hex: "#1e3a8a" },
    ],
    sizes: ["S", "M", "L"],
    features: [
      "Verres anti-reflets inclus",
      "Protection UV 100%",
      "Traitement hydrophobe",
      "Garantie 2 ans",
      "Ajustement personnalisé",
      "Étui de protection offert",
    ],
    specifications: {
      "Largeur verres": "52 mm",
      Pont: "18 mm",
      Branches: "145 mm",
      Poids: "18 g",
      Matériau: "Acétate italien",
      Origine: "Fabriqué en France",
    },
    inStock: true,
    stockCount: 12,
  },
};

const relatedProducts = [
  { id: "nadia", name: "Nadia", price: 95, category: "Vue" },
  { id: "tobias", name: "Tobias", price: 95, category: "Vue" },
  { id: "reiner", name: "Reiner", price: 95, category: "Vue" },
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? products[id as keyof typeof products] : null;

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-navy-900 mb-4">
              Produit non trouvé
            </h1>
            <Link to="/produits">
              <Button>Retour aux produits</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const getColorClass = (colorValue: string) => {
    const colorMap: Record<string, string> = {
      "amber-800": "bg-amber-800",
      black: "bg-black",
      "blue-900": "bg-blue-900",
    };
    return colorMap[colorValue] || "bg-gray-400";
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-navy-900 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link
              to="/produits"
              className="hover:text-navy-900 transition-colors"
            >
              Produits
            </Link>
            <span>/</span>
            <span className="text-navy-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative bg-gray-50 rounded-3xl p-12 aspect-square flex items-center justify-center">
                {/* Badges */}
                <div className="absolute top-6 left-6 space-y-2">
                  {product.isNew && (
                    <Badge className="bg-mint-500 text-white">Nouveau</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-gold-500 text-white">Bestseller</Badge>
                  )}
                  {product.originalPrice > product.price && (
                    <Badge className="bg-red-500 text-white">
                      -
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100,
                      )}
                      %
                    </Badge>
                  )}
                </div>

                {/* Wishlist & Share */}
                <div className="absolute top-6 right-6 space-y-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`w-10 h-10 rounded-full ${isWishlisted ? "text-red-500" : "text-gray-400"} hover:bg-white/80`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 rounded-full text-gray-400 hover:bg-white/80"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                {/* Product SVG */}
                <svg viewBox="0 0 300 120" className="w-64 h-32">
                  <circle
                    cx="75"
                    cy="60"
                    r="35"
                    fill="none"
                    stroke={product.colors[selectedColor].hex}
                    strokeWidth="3"
                  />
                  <circle
                    cx="225"
                    cy="60"
                    r="35"
                    fill="none"
                    stroke={product.colors[selectedColor].hex}
                    strokeWidth="3"
                  />
                  <line
                    x1="110"
                    y1="60"
                    x2="190"
                    y2="60"
                    stroke={product.colors[selectedColor].hex}
                    strokeWidth="3"
                  />
                  <line
                    x1="40"
                    y1="60"
                    x2="20"
                    y2="60"
                    stroke={product.colors[selectedColor].hex}
                    strokeWidth="3"
                  />
                  <line
                    x1="260"
                    y1="60"
                    x2="280"
                    y2="60"
                    stroke={product.colors[selectedColor].hex}
                    strokeWidth="3"
                  />
                </svg>

                {/* AR Try-on */}
                <div className="absolute bottom-6 right-6">
                  <Button
                    size="sm"
                    className="bg-navy-900 hover:bg-navy-800 text-white"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Essayer en AR
                  </Button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    <Eye className="w-6 h-6 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-mint-600 font-medium text-sm uppercase tracking-wide">
                    {product.brand}
                  </span>
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
                      {product.rating} ({product.reviews} avis)
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl font-playfair font-bold text-navy-900 mb-4">
                  {product.name}
                </h1>

                <p className="text-gray-600 font-lato leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-navy-900">
                    €{product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-xl text-gray-400 line-through">
                      €{product.originalPrice}
                    </span>
                  )}
                  <Badge className="bg-green-100 text-green-800">
                    Livraison gratuite
                  </Badge>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="font-medium text-navy-900 mb-3">
                  Couleur: {product.colors[selectedColor].name}
                </h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-12 h-12 rounded-full border-4 transition-all duration-200 ${
                        selectedColor === index
                          ? "border-navy-900 scale-110"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div
                        className={`w-full h-full rounded-full ${getColorClass(color.value)}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-medium text-navy-900 mb-3">
                  Taille: {selectedSize}
                </h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? "border-navy-900 bg-navy-900 text-white"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Stock */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-navy-900 mb-3">Quantité</h3>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= product.stockCount}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center space-x-2 text-green-600 mb-2">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">En stock</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.stockCount} exemplaires disponibles
                  </span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white py-4 text-lg"
                >
                  Ajouter au panier - €{product.price * quantity}
                </Button>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Essayer en magasin</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Prendre RDV</span>
                  </Button>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-mint-500" />
                  <div>
                    <div className="font-medium text-sm text-navy-900">
                      Garantie 2 ans
                    </div>
                    <div className="text-xs text-gray-600">
                      Réparation gratuite
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-navy-500" />
                  <div>
                    <div className="font-medium text-sm text-navy-900">
                      Livraison gratuite
                    </div>
                    <div className="text-xs text-gray-600">Sous 48h</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-gold-500" />
                  <div>
                    <div className="font-medium text-sm text-navy-900">
                      Retour 30 jours
                    </div>
                    <div className="text-xs text-gray-600">
                      Satisfait ou remboursé
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-navy-900 text-white shadow-lg"
                      : "text-gray-600 hover:text-navy-900"
                  }`}
                >
                  {tab === "description" && "Description"}
                  {tab === "specifications" && "Caractéristiques"}
                  {tab === "reviews" && "Avis clients"}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "description" && (
              <Card className="p-8 border-0 shadow-lg">
                <h3 className="text-2xl font-playfair font-semibold text-navy-900 mb-6">
                  Description détaillée
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-600 font-lato leading-relaxed mb-6">
                      {product.description} Cette monture exceptionnelle combine
                      un design intemporel avec les dernières innovations en
                      matière de confort et de durabilité.
                    </p>
                    <h4 className="font-semibold text-navy-900 mb-3">
                      Caractéristiques principales:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-mint-500 flex-shrink-0" />
                          <span className="text-gray-600 font-lato">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-mint-50 to-navy-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-navy-900 mb-4">
                      Conseils d'entretien
                    </h4>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p>• Nettoyez vos verres avec un chiffon microfibre</p>
                      <p>• Évitez les produits chimiques agressifs</p>
                      <p>
                        • Rangez dans l'étui fourni quand vous ne les portez pas
                      </p>
                      <p>• Faites ajuster par un professionnel si nécessaire</p>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === "specifications" && (
              <Card className="p-8 border-0 shadow-lg">
                <h3 className="text-2xl font-playfair font-semibold text-navy-900 mb-6">
                  Spécifications techniques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-3 border-b border-gray-200"
                      >
                        <span className="font-medium text-gray-700">{key}</span>
                        <span className="text-navy-900 font-semibold">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </Card>
            )}

            {activeTab === "reviews" && (
              <Card className="p-8 border-0 shadow-lg">
                <h3 className="text-2xl font-playfair font-semibold text-navy-900 mb-6">
                  Avis clients
                </h3>
                <div className="space-y-6">
                  {/* Review Summary */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-navy-900">
                          {product.rating}
                        </div>
                        <div className="flex justify-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-gold-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-600">
                          {product.reviews} avis
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((stars) => (
                            <div
                              key={stars}
                              className="flex items-center space-x-3"
                            >
                              <span className="text-sm text-gray-600 w-8">
                                {stars}★
                              </span>
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-gold-400 h-2 rounded-full"
                                  style={{
                                    width: `${stars === 5 ? 70 : stars === 4 ? 20 : 5}%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600 w-8">
                                {stars === 5 ? 87 : stars === 4 ? 25 : 12}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {[
                      {
                        name: "Marie L.",
                        rating: 5,
                        date: "15 mars 2024",
                        comment:
                          "Excellent produit ! La qualité est au rendez-vous et le style très élégant. Je recommande vivement.",
                      },
                      {
                        name: "Pierre D.",
                        rating: 4,
                        date: "8 mars 2024",
                        comment:
                          "Très satisfait de mon achat. Confortable à porter toute la journée. Service client au top.",
                      },
                    ].map((review, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 pb-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="font-medium text-navy-900">
                              {review.name}
                            </span>
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating ? "text-gold-400 fill-current" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-gray-600 font-lato">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Produits Similaires
            </h2>
            <p className="text-xl text-gray-600 font-lato">
              Découvrez d'autres modèles qui pourraient vous plaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link to={`/produits/${relatedProduct.id}`}>
                  <div className="relative bg-gray-50 p-8 h-64 flex items-center justify-center">
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
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-semibold text-lg text-navy-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 font-lato mb-3">
                      {relatedProduct.category}
                    </p>
                    <div className="text-xl font-bold text-navy-900">
                      €{relatedProduct.price}
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
