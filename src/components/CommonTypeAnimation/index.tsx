'use client';

import { TypeAnimation } from 'react-type-animation';
import { css } from '../../../styled-system/css';
import { useGlitch } from 'react-powerglitch';

type TextDataProps = {
	textData: (string | number)[];
};

const CommonTypeAnimation = ({ textData }: TextDataProps) => {
	const glitch = useGlitch({
		timing: {
			duration: 2850,
		},
		glitchTimeSpan: {
			start: 0.2,
		},
		shake: {
			velocity: 3,
			amplitudeY: 0.62,
		},
	});
	return (
		<div className={StyledWrapper}>
			<div ref={glitch.ref}>
				<TypeAnimation
					sequence={textData}
					speed={10}
					style={{
						fontSize: '1.5rem',
						color: '#C30003',
						fontWeight: 600,
						width: '80%',
						margin: '1rem',
					}}
				/>
			</div>
		</div>
	);
};

export default CommonTypeAnimation;

const StyledWrapper = css({
	textAlign: 'left',
	padding: '1rem',
});
