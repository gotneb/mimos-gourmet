import { Link } from "react-router";
import type { CakeCategory } from "~/models/Product";

interface HeroProps {
  cakeCategories: CakeCategory[];
}

const Hero = ({ cakeCategories }: HeroProps) => {
  return (
    <section className="py-16 bg-[#f8f6f0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossas Deliciosas Ofertas
          </h2>
          <p className="text-lg text-gray-600">
            Feito com amor, assado à perfeição.
          </p>
        </div>

        {/* Cake Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cakeCategories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer block"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <p className="text-orange-500 font-semibold">
                  Preço a partir de: R$ {category.startPrice.toFixed(2).replace('.', ',')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
