import { Link } from "react-router";
import type { FeaturedCake } from "~/models/Product";

interface HighlightsProps {
  featuredCakes: FeaturedCake[];
}

const Highlights = ({ featuredCakes }: HighlightsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Destaques
          </h2>
          <p className="text-lg text-gray-600">
            Uma seleção dos nossos bolos mais amados.
          </p>
        </div>

        {/* Featured Cakes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCakes.map((cake) => (
            <Link
              key={cake.id}
              to={`/products/${cake.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow block"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {cake.title}
                </h3>
                <p className="text-2xl font-bold text-orange-500 mb-3">
                  R$ {cake.price.toFixed(2).replace('.', ',')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {cake.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
