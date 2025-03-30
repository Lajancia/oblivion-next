import { css } from "../../../styled-system/css";
import HeaderComponent from "@/components/Header";
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { DashboardData } from "@/data/DashboardData";
import Link from "next/link";
import { cookies } from "next/headers";

const Dashboard = async () => {
  const cookieStore = cookies();
  const empCode = (await cookieStore).get("LOGIN_STATE")?.value;
  const personalInfo = empCode ? DashboardData[empCode] : null;
  return (
    <PageWrapper>
      <div className={StyledDashboardWrapper}>
        <HeaderComponent />
        <div className={StyledBodyWrapper}>
          <div className={StyledText}>
            좋은 하루입니다, 여러분. <br />
            오늘의 Black Out 위험도는 30%로 안전한 하루 되시기를 바랍니다.
          </div>
          <div className={StyledBoxWrapper}>
            <Link href={"/info"} className={StyledBox}>
              <IoPersonOutline />
              <div className={StyledSubtitle}>Info</div>
            </Link>
            <div className={StyledBox2}>
              <IoMailOutline />
              <div className={StyledSubtitle}>EMAIL</div>
            </div>
          </div>
          <div className={StyledCategory}>data Log</div>
          <div className={StyledContainer}>
            {personalInfo &&
              personalInfo
                .slice()
                .reverse()
                .map((object) => (
                  <Link
                    href={`/dashboard/datalog/${object.id}`}
                    key={object.id}
                  >
                    <button className={StyledPage}>
                      <div>{object.title}</div>
                      <div>{object.date}</div>
                    </button>
                  </Link>
                ))}
          </div>
          <div className={StyledCategory}>Food</div>
          <div className={StyledContainer2}>hello</div>
          <Footer />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;

const StyledDashboardWrapper = css({
  width: "100%",
  height: "100%"
});

const StyledBodyWrapper = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  gap: 4,
  width: "100%",
  height: "95%"
});

const StyledPage = css({
  color: "white",
  fontWeight: 600,
  padding: "0.5rem",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
});

const StyledBoxWrapper = css({
  display: "flex",
  flexDirection: "row",
  gap: 4,
  height: "20%"
});

const StyledBox = css({
  width: "50%",
  height: "100%",
  borderRadius: "10px",
  backgroundColor: "#C30003",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  fontSize: "4rem"
});

const StyledSubtitle = css({
  fontSize: "1.2rem",
  fontWeight: 600
});
const StyledBox2 = css({
  width: "50%",
  height: "100%",
  borderRadius: "10px",
  backgroundColor: "#D9D9D9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  fontSize: "4rem"
});
const StyledText = css({
  color: "white",
  height: "10%"
});

const StyledCategory = css({
  color: "white",
  fontWeight: 600
});
const StyledContainer = css({
  width: "100%",
  height: "20%",
  backgroundColor: "#1E1E1E",
  overflowY: "scroll",
  padding: "0.5rem",
  borderRadius: "10px"
});

const StyledContainer2 = css({
  width: "100%",
  height: "20%",
  backgroundColor: "#D9D9D9",
  borderRadius: "10px"
});
