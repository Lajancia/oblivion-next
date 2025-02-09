"use client";
// import LoadModal from "@/components/LoadModal";
import { useGlitch } from "react-powerglitch";
import { css } from "../../../../styled-system/css";
import { useState, useEffect } from "react";
type EmployeeCodeProps = {
  handleShow: () => void;
};
const EmployeeCode = ({ handleShow }: EmployeeCodeProps) => {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState("");

  const glitch = useGlitch({
    playMode: "manual",
    glitchTimeSpan: false,
    timing: {
      duration: 650,
    },
  });

  useEffect(() => {
    if (count >= 3) {
      setTimeout(() => {
        handleShow();
      }, 700);
    }
  }, [count]);

  const handleCount = () => {
    setCount((prev) => prev + 1);
    setCode("");
    glitch.startGlitch();
  };
  return (
    <>
      <div className={StyledContainer}>
        {/* <LoadModal /> */}

        <div className={StyledContents}>
          <div ref={glitch.ref} className={StyledWrapper}>
            <div className={StyledTitle}>
              EMPLOYEE <br />
              NUMBER
            </div>
            <input
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
              className={StyledInput}
              type="text"
            />
            <button className={StyledButton} onClick={handleCount}>
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeCode;

const StyledContainer = css({
  width: "100%",
  height: "100%",
  textAlign: "center",
  display: "flex",
  gap: "1.5rem",
  color: "#D9D9D9",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const StyledContents = css({
  width: "100%",
});

const StyledWrapper = css({
  width: "100%",
  textAlign: "center",
  display: "flex",
  gap: "1.5rem",
  color: "#D9D9D9",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const StyledTitle = css({
  fontSize: "2.5rem",
  fontWeight: 400,
});

const StyledInput = css({
  height: "3rem",
  border: "2px solid",
  borderRadius: "3px",
  borderColor: "#D9D9D9",
  "&:focus": {
    outline: "none",
  },
  padding: "5px",

  textAlign: "center",
  animation: "expandWidth 2s forwards",
});

const StyledButton = css({
  width: 0,
  height: "3rem",
  background: "#D9D9D9",
  borderRadius: "3px",
  color: "black",
  animation: "expandWidth 2s 2s forwards",
  "&:active": {
    backgroundColor: "red",
  },
});
