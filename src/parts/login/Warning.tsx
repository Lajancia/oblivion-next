'use client';

// import { TypeAnimation } from 'react-type-animation';
import { css } from '../../../styled-system/css';
import { useGlitch } from 'react-powerglitch';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { loadingData } from '@/data/decoration/loading';
import Cookies from 'js-cookie';
import CommonTypeAnimation from '@/components/CommonTypeAnimation';

const Warning = () => {
	const [openAnalyze, setOpenAnalyze] = useState(false);
	const router = useRouter();
	const endOfLogRef = useRef(null);
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

	useEffect(() => {
		Cookies.set('GUEST_STATE', 'FIRST');
		setTimeout(() => {
			setOpenAnalyze(true);
			setTimeout(() => {
				setOpenAnalyze(false);
				setTimeout(() => {
					router.push('/404');
				}, 88700);
			}, 17000);
		}, 88500);
	}, [router]);

	useEffect(() => {
		if (openAnalyze) {
			setTimeout(() => {
				// @ts-expect-error ignore type check
				endOfLogRef.current?.scrollIntoView({ behavior: 'smooth' });
			}, 5000);
		}
	}, [openAnalyze]);
	return (
		<>
			<div className={StyledContainer}>
				{openAnalyze ? (
					<div className={StyledModalContainer}>
						<div className={StyledAnalyze}>
							<div ref={glitch.ref} className={StyledAnalyzeTitle}>
								ANALYZING...
							</div>
							<div className={StyledLogPrint}>
								{loadingData.textLog.map((data, index) => (
									<div key={index}>{data}</div>
								))}
								{loadingData.textLog.map((data, index) => (
									<div key={index}>{data}</div>
								))}
								{loadingData.textLog.map((data, index) => (
									<div key={index}>{data}</div>
								))}
								<div ref={endOfLogRef} />
							</div>
							<div className={StyledLine} />
						</div>
					</div>
				) : null}
				<CommonTypeAnimation
					textData={[
						'',
						1500,
						'...이런',
						1500,
						'...당신, 코드가 없군요.',
						2000,
						'...놀라울 일은 아닙니다. 종종 당신같이 호기심 많은 사람들이 없지는 않았으니.', //  Continuing previous Text
						2000,
						'유출된 자료를 염탐하는 것으로는 부족했던 모양이죠?',
						3000,
						'안타깝게도 이곳은 직원 전용 자료실입니다.',
						3500,
						'안타깝게도 이곳은 직원 전용 자료실입니다. \n해당 사이트는 아직 안전 검수가 완료되지 않은 상태입니다.',
						3500,
						'우리 (주) 오블리비언은 일반 시민의 안전과 평온한 일상을 지키기 위해 모든 조치를 취할 사회적 의무와 책임이 있습니다.',
						4500,
						'....',
						1500,
						'....그런데 이상한 일이죠.',
						3500,
						"분명 '직원'만이 서버 접근 권한을 가질텐데...",
						4500,
						"분명 '직원'만이 서버 접근 권한을 가질텐데... \n그가 실수할 리가.",
						4500,
						'...',
						2500,
						"...잠시 '확인해 보도록'하겠습니다.",
						12500,
						'',
						10000,
						'...',
						2500,
						'...아하',
						1500,
						'...아하... 그렇게 된 것이었군요.',
						2000,
						'...아하... 그렇게 된 것이었군요. 이런. 참...',
						2000,
						'여전하다고 해야 할지...',
						2000,
						'미련하다고 해야 할지.',
						3000,
						'해당 사이트는 페이지를 나가는 순간 기록을 지우지만-...',
						3000,
						'해당 사이트는 페이지를 나가는 순간 기록을 지우지만-...당신에 대한 기록을 남겨두어야 겠습니다.',
						3000,
						'전 직원인 당신에게 무슨 일이 생기는 것은, 저희도 원치 않는 일이니까요.',
						3000,
						'전 직원인 당신에게 무슨 일이 생기는 것은, 저희도 원치 않는 일이니까요. 무엇보다도-... 누가 당신을, 끌어들인 걸까요...',
						1500,
						'아니. 괜한 이야기인 것 같군요.',
						2000,
						'모든 것은 우리의 통제 아래에 있으니, 당신이 염려할 부분은 아닙니다.',
						2000,
						'귀하의 지난 노고를 감사하며, 다시 한 번 환영합니다.',
						3000,
						'그리고 안녕히.',
					]}
				/>
			</div>
		</>
	);
};

export default Warning;

const StyledModalContainer = css({
	position: 'absolute',
	width: '100%',
	height: '0',
	backgroundColor: '#C30003',
	zIndex: 2,
	margin: '2rem',
	textAlign: 'center',
	color: '#D9D9D9',
	animation: 'expandHeight 2s forwards, shrink 2s 13s forwards',
});

const StyledLogPrint = css({
	fontSize: '1rem',
	height: '20%',
	overflow: 'scroll',
	textAlign: 'center',
	marginTop: '1rem',
	paddingTop: '50%',
});

const StyledAnalyze = css({
	width: '100%',
	height: '100%',
	textAlign: 'center',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	display: 'flex',
	opacity: 0,
	animation: 'opacityIn 2s 2s forwards, opacityOut 1s 12s forwards',
});

const StyledAnalyzeTitle = css({
	fontSize: '2rem',
});
const StyledContainer = css({
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '2rem',

	textAlign: 'center',
});

const StyledLine = css({
	width: '0%',
	marginTop: '2rem',
	color: '#D9D9D9',
	borderBottom: '2px solid',
	animation: 'expandWidth 10s 2.5s forwards',
});
