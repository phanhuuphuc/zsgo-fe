import Home from "@/components/pages/Home/List/HomeComponents";
import Help from "@/components/pages/Help/List/HelpComponents";
import GameDetails from "@/components/pages/GameDetails/List/GameDetailsContainer";
import GamerProfile from "@/components/pages/GamerProfiles/List/GamerProfileContainer";
import Product from "@/components/pages/Product/List/ProductContainer";
import * as path from "@/constants/path";
const publicRouters = [
  { path: "/", component: Home, exact: true },
  { path: "/help", component: Help, exact: true },
  { path: "/game-details", component: GameDetails, exact: true },
  { path: "/gamer-profile", component: GamerProfile, exact: true },
  { path: "/product", component: Product, exact: true },
];
const privateRouters = [];
export { publicRouters, privateRouters };
