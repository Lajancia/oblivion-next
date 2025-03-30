import { css } from "../../../../../styled-system/css";
import PageWrapper from "@/components/PageWrapper";
import HeaderComponent from "@/components/Header";
import { cookies } from "next/headers";
import { DashboardData } from "@/data/DashboardData";
import { EmployeeCode } from "@/data/employeeCode";

const DataLog = async ({ params }: { params: Promise<{ id: number }> }) => {
  const cookieStore = cookies();
  const empCode = (await cookieStore).get("LOGIN_STATE")?.value;
  const { id } = await params;
  const DataLog = empCode ? DashboardData[empCode] : null;
  const nickName = empCode ? EmployeeCode[empCode].nickname : null;

  return (
    <PageWrapper>
      <div className={StyledLogWrapper}>
        <HeaderComponent />
        {DataLog ? (
          <div className={StyledBodyWrapper}>
            <div className={StyledTitle}>{DataLog[id].title}</div>
            <div className={StyledData}>{DataLog[id].date}</div>
            {DataLog[id].data.map((log, index) => (
              <div
                key={index}
                className={StyledLog}
              >{`[${nickName}:${index}] : ${log}`}</div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </PageWrapper>
  );
};

export default DataLog;

const StyledLogWrapper = css({
  width: "100%",
  height: "100%",
  color: "white"
});

const StyledTitle = css({
  fontSize: "2rem",
  fontWeight: 600,
  textAlign: "center"
});

const StyledData = css({
  fontSize: "1rem",
  fontWeight: 600,
  textAlign: "center"
});

const StyledLog = css({
  fontSize: "0.8rem",
  margin: "2rem 0"
});
const StyledBodyWrapper = css({
  height: "95%",
  overflowY: "scroll"
});
