import PreloaderComponents from '@/components/partials/Preloader/PreloaderComponents';
import { useEffect, useState } from 'react';
import HomeComponents from './HomeComponents';
const HomeContainer = () => {
	const [showIntro, setShowIntro] = useState(true);
	const time = 3;
	useEffect(
		() => {
			let timer1 = setTimeout(() => setShowIntro(false), time * 1000);

			// this will clear Timeout
			// when component unmount like in willComponentUnmount
			// and show will not change to true
			return () => {
				clearTimeout(timer1);
			};
		},
		// useEffect will run only one time with empty []
		// if you pass a value to array,
		// like this - [data]
		// than clearTimeout will run every time
		// this value changes (useEffect re-run)
		[],
	);
	return showIntro ? <PreloaderComponents /> : <HomeComponents />;
	//
};

export default HomeContainer;
