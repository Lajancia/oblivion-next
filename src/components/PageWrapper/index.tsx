import { ReactElement } from 'react';
import { css } from '../../../styled-system/css';

interface ChildrenProps {
	children: ReactElement;
}
const PageWrapper = ({ children }: ChildrenProps) => {
	return <div className={StyledWrapper}>{children}</div>;
};

export default PageWrapper;

const StyledWrapper = css({
	padding: '1.5rem',
	maxWidth: '400px',
	overflowX: 'hidden',
	height: '100dvh',
	margin: 'auto',
});
