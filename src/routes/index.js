import Home from '@/components/pages/Home/List/HomeComponents';
import Help from '@/components/pages/Help/List/HelpComponents';
import GamerProfile from '@/components/pages/GamerProfiles/List/GamerProfileContainer';
import Item from '@/components/pages/Webshop/Item/List/ItemContainer';
import ItemDetails from '@/components/pages/Webshop/ItemDetails/List/ItemDetailsContainer';
import Car from '@/components/pages/Webshop/Car/List/CarContainer';
import Acution from '@/components/pages/Event/Auction/List/AuctionContainer';
import AcutionDetails from '@/components/pages/Event/AuctionDetails/List/AuctionDetailsContainer';
import {
	HOME_PAGE_PATH,
	ITEM_DETAILS_PAGE_PATH,
	HELP_PAGE_PATH,
	GAMER_PROFILE_PAGE_PATH,
	WEBSHOP_ITEM_PAGE_PATH,
	WEBSHOP_CAR_PAGE_PATH,
	EVENT_ACUTION_PAGE_PATH,
	ACUTION_DETAILS_PAGE_PATH,
} from '@//constants/path';
const publicRouters = [
	{ path: HOME_PAGE_PATH.path, component: Home, exact: true },
	{ path: HELP_PAGE_PATH.path, component: Help, exact: true },
	{ path: ITEM_DETAILS_PAGE_PATH.path, component: ItemDetails, exact: true },
	{ path: GAMER_PROFILE_PAGE_PATH.path, component: GamerProfile, exact: true },
	{ path: WEBSHOP_ITEM_PAGE_PATH.path, component: Item, exact: true },
	{ path: WEBSHOP_CAR_PAGE_PATH.path, component: Car, exact: true },
	{ path: EVENT_ACUTION_PAGE_PATH.path, component: Acution, exact: true },
	{ path: ACUTION_DETAILS_PAGE_PATH.path, component: AcutionDetails, exact: true },
];
const privateRouters = [];
export { publicRouters, privateRouters };
