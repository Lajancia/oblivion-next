import { css } from "../../../styled-system/css";

const LoadModal = () => {
  return (
    <div className={StylecContainer}>
      <button>O</button>
      <button>B</button>
      <button>L</button>
      <button>I</button>
      <button>V</button>
      <button>I</button>
      <button>O</button>
      <button>N</button>
    </div>
  );
};

export default LoadModal;

const StylecContainer = css({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "black",
  width: "100vw",
  height: "100vh",
  zIndex: 1,
});
