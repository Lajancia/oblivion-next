'use client';
// import LoadModal from "@/components/LoadModal";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Warning from '../../parts/login/Warning';
import Cookies from 'js-cookie';
import SecondWarning from '../../parts/login/SecondWarning';
import ThirdWarning from '../../parts/login/ThirdWarning';
import PageWrapper from '@/components/PageWrapper';
const EmployeeCode = dynamic(() => import('../../parts/login/EmployeeCode'), {
	ssr: false,
});

const Login = () => {
	const [show, setShow] = useState(false);
	// const [easterShow, setEasterShow] = useState(false);
	const [guestCheck, setGuestCheck] = useState<string | null | undefined>('');

	useEffect(() => {
		setShow(false);
		const visitorCheck = Cookies.get('GUEST_STATE');
		setGuestCheck(visitorCheck);
	}, []);

	const handleShow = () => {
		setShow(!show);
	};

	return (
		<PageWrapper>
			{/* {easterShow ? (
				<div className={StyledLookAtMe}>
					<div className={StyledWrapper}>
						<LookAtMe />
					</div>
				</div>
			) : null} */}

			{show ? (
				<>
					{guestCheck === 'FIRST' ? (
						<SecondWarning />
					) : guestCheck === 'SECOND' ? (
						<ThirdWarning />
					) : (
						<Warning />
					)}
				</>
			) : (
				<EmployeeCode handleShow={handleShow} />
			)}
		</PageWrapper>
	);
};

export default Login;
