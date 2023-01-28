import CarComponents from './CarComponents';
import ComingSoon from '@/components/layouts/DefaultLayout/ComingSoon/ComingSoon';
import React from 'react';
const CarContainer = () => {
	return (
		<React.Fragment>
			<ComingSoon />
			<CarComponents />
		</React.Fragment>
	);
};

export default CarContainer;
