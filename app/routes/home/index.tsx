import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mimos Doçuras Gourmet" },
    { name: "description", content: "Bem-vindo(a) à Mimos Doçuras Gourmet!" },
  ];
}

const HomePage = () => {
    return ( <>
    HomePage
    </> );
}
 
export default HomePage;