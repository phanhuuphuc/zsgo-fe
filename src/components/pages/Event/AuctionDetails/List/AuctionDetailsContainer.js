import React from 'react';
import AuctionDetailsComponents from './AuctionDetailsComponents';
import ComingSoon from '@/components/layouts/DefaultLayout/ComingSoon/ComingSoon';
const AuctionDetailsContainer = () => {
	return (
		<React.Fragment>
			<ComingSoon />
			<AuctionDetailsComponents />
		</React.Fragment>
	);
};

export default AuctionDetailsContainer;
