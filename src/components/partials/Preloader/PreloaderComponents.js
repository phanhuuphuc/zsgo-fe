import React, { useEffect, useRef } from 'react';
const PreloaderComponents = () => {
	const vidRef = useRef();
	useEffect(() => {
		vidRef.current.play();
	}, []);
	return (
		<video muted="muted" style={{ width: `100%` }} ref={vidRef} autoPlay={'autoplay'} controls>
			<source src="/assets/video/preloader.mp4" type="video/mp4" />
		</video>
	);
};

export default PreloaderComponents;
