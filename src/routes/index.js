import Home from "@/components/pages/Home/List/HomeComponents";
import Help from "@/components/pages/Help/List/HelpComponents";
import GameDetails from "@/components/pages/GameDetails/List/GameDetailsComponents";
const publicRouters = [
  { path: "/", component: Home, exact: true },
  { path: "/help", component: Help, exact: true },
  { path: "/game-details", component: GameDetails, exact: true },
];
const privateRouters = [];
export { publicRouters, privateRouters };
