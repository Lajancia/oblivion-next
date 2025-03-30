import { css } from "../../../styled-system/css";
import PageWrapper from "@/components/PageWrapper";
import HeaderComponent from "@/components/Header";
import { EmployeeCode } from "@/data/employeeCode";
import { cookies } from "next/headers";
import { GiDandelionFlower } from "react-icons/gi";
const Info = async () => {
  const cookieStore = cookies();
  const empCode = (await cookieStore).get("LOGIN_STATE")?.value;
  const personalInfo = empCode ? EmployeeCode[empCode] : null;

  if (!personalInfo) {
    return (
      <div className={StyledWarning}>
        No personal information available. Please log in again.
      </div>
    );
  }

  return (
    <PageWrapper>
      <>
        <HeaderComponent />
        <div className={StyledInfoWrapper}>
          <div className={StyledFlower}>
            <GiDandelionFlower />
            <div className={StyledText}>1978.05.11 - 2020.01.??</div>
          </div>
          <div className={StyledText}>{`Name: ${personalInfo.name}`}</div>
          <div className={StyledText}>{`Country: ${personalInfo.country}`}</div>
          <div className={StyledText}>{`Age: ${personalInfo.age}`}</div>
          <div className={StyledText}>{`Team: ${personalInfo.team}`}</div>
          <div className={StyledText}>{`Type: ${personalInfo.type}`}</div>
          <div>
            <div className={StyledText}>{`Info:`}</div>
            <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
              {personalInfo.history.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    </PageWrapper>
  );
};

export default Info;

const StyledWarning = css({ color: "white" });
const StyledFlower = css({
  width: "100%",
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "4rem",
  padding: "2rem 0",
  gap: 2
});
const StyledInfoWrapper = css({
  overflowY: "scroll",
  width: "100%",
  height: "95%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "2rem",
  gap: 4,
  color: "white",
  fontSize: "1rem"
});
const StyledText = css({
  fontSize: "1.2rem",
  fontWeight: 600
});
