'use client';
import { useState } from 'react';
import { css } from '../../../styled-system/css';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
import Link from 'next/link';
const HeaderComponent = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const handleOpenMenu = () => {
		setOpenMenu(true);
	};
	const handleCloseMenu = () => {
		setOpenMenu(false);
	};
	const handleLogout = () => {
		Cookies.remove('LOGIN_STATE');
		Cookies.remove('GUEST_STATE');
		redirect('/login');
	};

	return (
		<>
			{openMenu ? (
				<div className={StyledSideMenu}>
					<button className={StyledCloseMenu} onClick={handleCloseMenu}>
						<IoClose />
					</button>
					<button className={StyledCloseMenu} onClick={handleLogout}>
						logout
					</button>
				</div>
			) : (
				<></>
			)}
			<div className={StyledHeader}>
				<Link href={'/dashboard'}>
					<button className={StyledHeaderText}> Dashboard</button>
				</Link>
				<div className={StyledLeftItems}>
					<button className={StyledMenu} onClick={handleOpenMenu}>
						<IoMenu />
					</button>
				</div>
			</div>
		</>
	);
};

export default HeaderComponent;

const StyledSideMenu = css({
	zIndex: 2,
	position: 'absolute',
	width: '100%',
	height: '100dvh',
	backgroundColor: 'black',
});
const StyledHeader = css({
	display: 'flex',
	height: '5%',
	width: '100%',
	justifyContent: 'space-between',
	alignItems: 'center',
	fontWeight: 400,
});

const StyledLeftItems = css({
	display: 'flex',
	color: 'white',
	gap: 2,
	fontSize: '1.5rem',
});
const StyledHeaderText = css({
	color: 'white',
	fontSize: '1.5rem',
	fontWeight: 600,
});

const StyledMenu = css({
	color: 'white',
	fontSize: '2rem',
});

const StyledCloseMenu = css({
	color: 'white',
	fontSize: '2rem',
	width: '100%',
	textAlign: 'right',
});
