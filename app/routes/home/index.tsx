import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Highlights from "~/components/Highlights";
import Footer from "~/components/Footer";
import type { Route } from "./+types/index";
import type { CakeCategory, FeaturedCake } from "~/models/Product";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sweet Delights Bakery" },
    { name: "description", content: "Welcome to Sweet Delights Bakery - Handcrafted with love, baked to perfection." },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ cakeCategories: CakeCategory[]; featuredCakes: FeaturedCake[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/cakeCategories`);
  const cakeCategories = await res.json();

  const res2 = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/featuredCakes`);
  const featuredCakes = await res2.json();

  return { cakeCategories, featuredCakes };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { cakeCategories, featuredCakes } = loaderData;

  return (
    <div className="min-h-screen bg-[#f8f6f0]">
      <Header />
      <Hero cakeCategories={cakeCategories} />
      <Highlights featuredCakes={featuredCakes} />
      <Footer />
    </div>
  );
};

export default HomePage;
