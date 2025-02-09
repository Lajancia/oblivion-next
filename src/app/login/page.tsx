'use client';
// import LoadModal from "@/components/LoadModal";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Warning from '../parts/login/Warning';
import Cookies from 'js-cookie';
import SecondWarning from '../parts/login/SecondWarning';
import ThirdWarning from '../parts/login/ThirdWarning';
const EmployeeCode = dynamic(() => import('../parts/login/EmployeeCode'), {
	ssr: false,
});

const Login = () => {
	const [show, setShow] = useState(false);
	const [guestCheck, setGuestCheck] = useState<string | null | undefined>('');

	useEffect(() => {
		const visitorCheck = Cookies.get('GUEST_STATE');
		setGuestCheck(visitorCheck);
	}, []);
	const handleShow = () => {
		setShow(!show);
	};
	return (
		<>
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
		</>
	);
};

export default Login;
