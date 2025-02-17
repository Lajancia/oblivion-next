'use client';

// import { TypeAnimation } from 'react-type-animation';
import { css } from '../../../styled-system/css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import CommonTypeAnimation from '@/components/CommonTypeAnimation';

const ThirdWarning = () => {
	const router = useRouter();

	useEffect(() => {
		Cookies.set('GUEST_STATE', 'SECOND');
		setTimeout(() => {
			router.push('/404');
		}, 10000);
	}, []);

	return (
		<>
			<div className={StyledContainer}>
				<CommonTypeAnimation
					textData={[
						'',
						1500,
						'...',
						1500,
						'......',
						2000,
						'......안됩니다.', //  Continuing previous Text
					]}
				/>
			</div>
		</>
	);
};

export default ThirdWarning;

const StyledContainer = css({
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '2rem',

	textAlign: 'center',
});
