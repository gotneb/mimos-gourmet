import Hero from "~/components/Hero";
import type { Route } from "./+types/index";
import { useState } from "react";
import type { Product } from "~/models/Product";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mimos Doçuras Gourmet" },
    { name: "description", content: "Bem-vindo(a) à Mimos Doçuras Gourmet!" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<Product[]> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
  const data = await res.json();

  return data;
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = loaderData;

  const productsFiltered = products.filter((p) =>
    p.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
      <Hero />
      {/* Search bar */}
      <div className="mt-5">
        <input
          type="text"
          placeholder="Pesquise por bolos, kits e outras comidas..."
          className="w-full bg-[#f4e7ed] px-4 py-2 rounded-md text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-100 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <h2 className="mt-5 text-3xl font-semibold">Produtos</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {productsFiltered.map((p) => (
          <Link
            key={p.id}
            to={`/products/${p.id}`}
            className="transition transform duration-300 hover:-translate-y-2"
          >
            <div className="bg-gray-50 border border-gray-200 p-4 overflow-hidden rounded-md shadow-sm hover:shadow-md transition-shadow">
              <div className="">
                <img
                  src={p.photos[0]}
                  alt={p.name}
                  className="h-full w-full rounded-sm"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-lg">{p.name}</h3>
                <p className="text-sm mt-2 text-gray-500">{p.description}</p>
                <p className="text-base mt-2 font-semibold text-pink-600">
                  R$
                  {p.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
