import { css } from "../../../styled-system/css";
const Footer = () => {
  return <div className={StyledFooter}>1.1.0 beta</div>;
};
export default Footer;

const StyledFooter = css({
  width: "100%",
  textAlign: "center",
  color: "white",
  fontSize: "0.8rem"
});
