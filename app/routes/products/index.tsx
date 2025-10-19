import { useState } from "react";
import { Link, useParams } from "react-router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { Route } from "./+types/index";
import type { ProductDetail } from "~/models/Product";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: "Detalhes do Produto - Mimos Gourmet" },
    { name: "description", content: "Personalize seu bolo com nossas opções de sabor, tamanho e cobertura." },
  ];
}

export async function loader({
  params,
}: Route.LoaderArgs): Promise<ProductDetail> {
  const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/products/${params.id}`);
  const data = await res.json();
  return data;
}

const ProductDetailPage = ({ loaderData }: Route.ComponentProps) => {
  const product = loaderData;
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedBatterType, setSelectedBatterType] = useState(product.batterTypes[0]);

  const calculateFinalPrice = () => {
    return product.basePrice + selectedFlavor.price + selectedSize.price + selectedBatterType.price;
  };

  return (
    <div className="min-h-screen bg-[#f8f6f0]">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#ffabf2]">
              Início
            </Link>
            <span className="mx-2 text-gray-400">›</span>
            <Link to="/" className="text-gray-500 hover:text-[#ffabf2]">
              Bolos
            </Link>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-800 font-medium">{product.category}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section - Product Images */}
          <div>
            {/* Main Image */}
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Image Carousel Indicators */}
            <div className="flex justify-center space-x-2 mb-6">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === selectedImage ? 'bg-[#ffabf2]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    index === selectedImage ? 'border-[#ffabf2]' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Customization Options */}
            <div className="space-y-6 mb-8">
              {/* Flavor Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sabor
                </label>
                <select
                  value={selectedFlavor.id}
                  onChange={(e) => {
                    const flavor = product.flavors.find(f => f.id === e.target.value);
                    if (flavor) setSelectedFlavor(flavor);
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffabf2] focus:border-[#ffabf2]"
                >
                  {product.flavors.map((flavor) => (
                    <option key={flavor.id} value={flavor.id}>
                      {flavor.name} {flavor.price > 0 ? `(+R$ ${flavor.price.toFixed(2).replace('.', ',')})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tamanho
                </label>
                <select
                  value={selectedSize.id}
                  onChange={(e) => {
                    const size = product.sizes.find(s => s.id === e.target.value);
                    if (size) setSelectedSize(size);
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffabf2] focus:border-[#ffabf2]"
                >
                  {product.sizes.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.name} {size.price > 0 ? `(+R$ ${size.price.toFixed(2).replace('.', ',')})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Batter Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Cobertura
                </label>
                <select
                  value={selectedBatterType.id}
                  onChange={(e) => {
                    const batterType = product.batterTypes.find(b => b.id === e.target.value);
                    if (batterType) setSelectedBatterType(batterType);
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffabf2] focus:border-[#ffabf2]"
                >
                  {product.batterTypes.map((batterType) => (
                    <option key={batterType.id} value={batterType.id}>
                      {batterType.name} {batterType.price > 0 ? `(+R$ ${batterType.price.toFixed(2).replace('.', ',')})` : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Final Price */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Preço Final
              </h3>
              <p className="text-3xl font-bold text-[#ffabf2]">
                R$ {calculateFinalPrice().toFixed(2).replace('.', ',')}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-[#ffabf2] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#e099d9] transition-colors flex items-center justify-center space-x-2">
              <span>🛒</span>
              <span>Adicionar ao Carrinho</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;