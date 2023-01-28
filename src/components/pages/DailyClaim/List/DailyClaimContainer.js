import DailyClaimComponents from './DailyClaimComponents';
import ComingSoon from '@/components/layouts/DefaultLayout/ComingSoon/ComingSoon';
import React from 'react';
const DailyClaimContainer = () => {
	return (
		<React.Fragment>
			<ComingSoon />
			<DailyClaimComponents />
		</React.Fragment>
	);
};

export default DailyClaimContainer;
