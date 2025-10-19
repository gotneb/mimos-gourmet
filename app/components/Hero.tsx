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
            Explore Our Delicious Cakes
          </h2>
          <p className="text-lg text-gray-600">
            Handcrafted with love, baked to perfection.
          </p>
        </div>

        {/* Cake Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cakeCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="aspect-square">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
