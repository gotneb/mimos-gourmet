const Hero = () => {
  return (
    <div className="relative bg-[url('/images/cake-hero.jpg')] rounded-sm bg-cover bg-center w-full h-[400px]">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-sm flex items-center justify-center">
        {/* Content */}
        <div className=" items-center text-center text-white px-12">
          <p className="text-5xl">🎂</p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold mb-2">
            Bolos e Kits de Festa Artesanais
          </h1>
          <p className="font-semibold md:text-lg">
            Adoce seus momentos e crie memórias que ficam pra sempre. ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
