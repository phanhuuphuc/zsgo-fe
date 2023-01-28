import AuctionComponents from './AuctionComponents';
import React from 'react';
import ComingSoon from '@/components/layouts/DefaultLayout/ComingSoon/ComingSoon';
const AuctionContainer = () => {
	return (
		<React.Fragment>
			<ComingSoon />
			<AuctionComponents />
		</React.Fragment>
	);
};

export default AuctionContainer;
