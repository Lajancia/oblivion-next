'use client';

// import { TypeAnimation } from 'react-type-animation';
import { css } from '../../../../styled-system/css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import CommonTypeAnimation from '@/components/CommonTypeAnimation';

const SecondWarning = () => {
	const router = useRouter();

	useEffect(() => {
		Cookies.set('GUEST_STATE', 'SECOND');
		setTimeout(() => {
			router.push('/404');
		}, 70000);
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
						'...세상에...',
						2000,
						'대체 뭘 찾고 싶으신 건지 모르겠지만...', //  Continuing previous Text
						2000,
						'현재 해당 사이트는 점검중에 있습니다.',
						3000,
						'...',
						3500,
						'...때때로 두고 가야 하는 것들이 있습니다.',
						3500,
						'당신의 호기심은, 이곳에 두고간 것들로 부터 비롯된 것이겠죠.',
						4500,
						'....',
						1500,
						'....그러나 지금은 끊어진 것들입니다.',
						3500,
						'특히, 당신의 이러한 행동은 메인 관리 프로세스의 스트레스 관리에 그리 좋지 않습니다.',
						4500,
						'모쪼록 양해를 구합니다.',
					]}
				/>
			</div>
		</>
	);
};

export default SecondWarning;

const StyledContainer = css({
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '2rem',

	textAlign: 'center',
});
