import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/home/index.tsx"),
    route("products/:id", "./routes/products/index.tsx"),
] satisfies RouteConfig;
