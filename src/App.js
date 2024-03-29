import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '@/routes';
import { DefaultLayout } from '@/components/layouts';
import { HOME_PAGE_PATH, DAILY_CLAIM_PAGE_PATH } from './constants/path';
import Breadcrumbs from '@/components/layouts/Breadcrumbs';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					{publicRouters.map((route, index) => {
						const Layout = route.layout === null ? Fragment : DefaultLayout;
						const Page = route.component;
						return (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								element={
									<Layout>
										{/* {route.path != HOME_PAGE_PATH.path &&
										route.path != DAILY_CLAIM_PAGE_PATH.path ? (
											<Breadcrumbs currentPage={route.path} />
										) : null} */}
										<Page />
									</Layout>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
