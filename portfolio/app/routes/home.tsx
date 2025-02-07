import type { Route } from "./+types/home";
import Homepage from "../home/homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Portfolio" },
    { name: "description", content: "Welcome to Keeryn's World!" },
  ];
}

export default function Home() {
  return <Homepage />;
}
