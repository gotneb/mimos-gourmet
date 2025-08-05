import type { Product } from "~/models/Product";
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Produtos | Mimos Doçuras Gourmet" },
    { name: "description", content: "Catalogo de produtos!" },
  ];
}

export async function loader({
  request,
  params,
}: Route.LoaderArgs): Promise<Product> {
  const res = await fetch(`http://localhost:8000/products/${params.id}`);
  const data = await res.json();

  return data;
}

const ProductsPage = ({ loaderData }: Route.ComponentProps) => {
  const product = loaderData;
  console.log(product);

  return (
    <section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {product.photos[0] && (
            <img
              src={product.photos[0]}
              alt="Foto photo"
              className="rounded-md object-cover w-full h-full md:col-span-2"
            />
          )}

          <div className="flex flex-col gap-3">
            {product.photos[1] && (
              <img
                src={product.photos[1]}
                alt="Foto 2"
                className="rounded-md object-cover h-1/2 w-full"
              />
            )}
            {product.photos[2] && (
              <img
                src={product.photos[2]}
                alt="Foto 3"
                className="rounded-md object-cover h-1/2 w-full"
              />
            )}
          </div>
        </div>
        <h1 className="mt-3 text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-lg font-semibold text-gray-500">
          {product.description}
        </p>
        <p className="mt-2 text-base mt-2 font-semibold text-pink-500">
          R$
          {product.price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>

      <div className="mt-3">
        <h2 className="font-bold text-3xl mb-3">Ingredientes</h2>
        <p className="text-gray-700 mb-3">
          Nosso kit completo para sua comemoração inclui bolo, docinhos,
          salgados e bebida. Tudo feito com carinho para adoçar e saborear
          momentos especiais!
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>
            1 Bolo vulcão 18cm no tema de sua preferência (serve aproximadamente
            12 a 14 fatias)
          </li>
          <li>1 Pudim ou Brigadeirão</li>
          <li>100 salgados</li>
          <li>50 docinhos</li>
          <li>01 guaraná pet 1,5L grátis</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductsPage;
