import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './Breadcrumbs.css';
const Breadcrumbs = (props) => {
	const breadcrumbs = useBreadcrumbs();
	const location = useLocation();
	const currentPage = props.currentPage;
	return (
		<section className="breadcrumb-area raffles">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2>{currentPage.replace('/', '').toUpperCase()}</h2>
						<ul className="breadcrumb-list">
							<nav>
								{breadcrumbs.map(({ key, match, breadcrumb }) => (
									<Link
										className={
											match.pathname === location.pathname
												? 'breadcrumb-active'
												: 'breadcrumb-not-active'
										}
										key={breadcrumb.props.children}
										to={key}
									>
										{breadcrumb} /
									</Link>
								))}
							</nav>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Breadcrumbs;
