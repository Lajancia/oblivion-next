'use client';
import { css } from '../../../../styled-system/css';
import { useGlitch } from 'react-powerglitch';
// import { useEffect, useState } from 'react';
const LookAtMe = () => {
	// const [lookShow, setLookShow] = useState(false);
	const glitch = useGlitch({
		timing: {
			duration: 3000,
		},
		glitchTimeSpan: {
			start: 0.1,
		},
	});

	return (
		<div className={StyledContainer}>
			<>
				<div className={StyledWrapper}>
					<div ref={glitch.ref} className={StyledText}>
						나를 보세요
					</div>
				</div>
				<div className={StyledContainer}>
					<section className={StyledSection}></section>
					<svg className={StyledSVG}>
						<filter id="noise">
							<feTurbulence id="turbulence">
								<animate
									attributeName="baseFrequency"
									dur="50s"
									values="0.9 0.9;0.8 0.8; 0.9 0.9"
									repeatCount="Infinite"
								></animate>
							</feTurbulence>
							<feDisplacementMap
								in="SourceGraphic"
								scale="60"
							></feDisplacementMap>
						</filter>
					</svg>
				</div>
			</>
		</div>
	);
};

export default LookAtMe;

const StyledContainer = css({
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	zIndex: 1,
});

const StyledWrapper = css({
	width: '100%',
	height: '100%',
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

const StyledSVG = css({
	width: 0,
	height: 0,
});

const StyledText = css({
	// position: 'absolute',
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	color: 'red',
	zIndex: 2,
	textAlign: 'center',
	fontSize: '3rem',
	fontWeight: 800,
	opacity: 1,
});
const StyledSection = css({
	position: 'absolute',
	left: '-50px',
	top: '-50px',
	height: 'calc(100% + 50px)',
	width: 'calc(100% + 50px)',
	background: 'repeating-linear-gradient(#111, #111 50%, white 50%, white)',
	backgroundSize: '5px 5px',
	filter: 'url(#noise)',
});
