"use client";

import { css } from "../../../styled-system/css";
import HeaderComponent from "@/components/Header";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { DashboardData } from "@/data/DashboardData";
import Link from "next/link";
import { IoIosWarning } from "react-icons/io";
import { useGlitch } from "react-powerglitch";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
type DashboardItem = {
  id: number;
  title: string;
  subdescription?: string[];
  data: string[]; // Array of strings
  date: string; // Date in string format (e.g., "YYYY-MM-DD")
};
const Dashboard = () => {
  const [personalInfo, setPersonalInfo] = useState<DashboardItem[] | null>(
    null
  );
  const [date, setDate] = useState({ day: 1, date: "MON", month: "JAN" });

  useEffect(() => {
    const date = new Date();
    const months = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER"
    ];
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const month = months[date.getMonth()];
    const day = days[date.getDay()];
    const dayNumber = date.getDate();
    setDate({ day: dayNumber, date: day, month: month });
  }, []);

  useEffect(() => {
    // 로그인 상태 쿠키 가져오기
    const empCode = Cookies.get("LOGIN_STATE");

    // empCode에 따라 DashboardData에서 데이터 설정
    if (empCode) {
      setPersonalInfo(DashboardData[empCode]);
    }
  }, []);
  const glitch = useGlitch({
    playMode: "manual",
    glitchTimeSpan: false,
    timing: {
      duration: 650
    }
  });
  return (
    <PageWrapper>
      <div className={StyledDashboardWrapper}>
        <HeaderComponent />
        <div className={StyledBodyWrapper}>
          <div className={StyledDate}>
            <div className={StyledDay}>
              <div className={StyledDayNumber}>{date.day}</div>
              <div>{date.date}</div>
            </div>
            <div className={StyledMonth}>{date.month}</div>
          </div>
          <div className={StyledScript}>
            <button className={StyledButton}>Access Denied</button>
            <button className={StyledButton}>Access Denied</button>
          </div>

          <div className={StyledBoxWrapper}>
            <button className={StyledBox1}>
              <MdOutlineHealthAndSafety />
              <div className={StyledSubtitle}>30%</div>
            </button>

            <Link href={"/info"} className={StyledBox}>
              <button className={StyledBox2}>
                <IoPersonOutline />
                <div className={StyledSubtitle}>Info</div>
              </button>
            </Link>
            <button
              onClick={() => {
                glitch.startGlitch();
              }}
              className={StyledBox2}
            >
              <div ref={glitch.ref} className={StyledEmail}>
                <IoMailOutline />
                <div className={StyledSubtitle}>EMAIL</div>
              </div>
            </button>
          </div>
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

          <div className={StyledContainer2}>
            <div className={StyledWarning}>
              <IoIosWarning />
              <div>Disconnected</div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;

const StyledScript = css({
  display: "flex",
  color: "#D9D9D9",
  gap: 4
});

const StyledButton = css({
  width: "100%",
  height: "2.5rem",
  borderRadius: "10px",
  backgroundColor: "#1E1E1E"
});

const StyledEmail = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2
});
const StyledDate = css({
  color: "#D9D9D9",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
});
const StyledDay = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "7rem",
  gap: 4
});
const StyledDayNumber = css({
  fontSize: "7rem"
});
const StyledMonth = css({
  fontSize: "1.5rem"
});
const StyledWarning = css({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});
const StyledDashboardWrapper = css({
  width: "100%",
  height: "100%"
});

const StyledBodyWrapper = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: 4,
  width: "100%",
  height: "95%",
  paddingTop: "2rem"
});

const StyledPage = css({
  color: "#D9D9D9",
  fontWeight: 600,
  padding: "0.5rem",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
});

const StyledBoxWrapper = css({
  width: "100%",
  display: "flex",
  gap: 4,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  height: "20%"
});

const StyledBox1 = css({
  width: "30%",
  height: "100%",
  aspectRatio: "1 / 1", // 유지 정사각형 비율
  borderRadius: "10px",
  backgroundColor: "#C30003",
  display: "flex", // 플렉스 박스 사용
  justifyContent: "center", // 수평 중앙 정렬
  alignItems: "center", // 수직 중앙 정렬
  flexDirection: "column", // 세로 방향 정렬
  fontSize: "2rem",
  gap: 2,
  color: "#D9D9D9"
});
const StyledBox = css({
  width: "30%",
  height: "100%",
  aspectRatio: "1 / 1", // Keep 1:1 ratio
  backgroundColor: "#1E1E1E",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  fontSize: "2rem",
  color: "#D9D9D9"
});

const StyledSubtitle = css({
  fontSize: "1.2rem",
  fontWeight: 600,
  color: "#D9D9D9"
});
const StyledBox2 = css({
  width: "30%",
  height: "100%",
  aspectRatio: "1 / 1", // 유지 정사각형 비율
  borderRadius: "10px",
  backgroundColor: "#1E1E1E",
  display: "flex", // 플렉스 박스 사용
  justifyContent: "center", // 수평 중앙 정렬
  alignItems: "center", // 수직 중앙 정렬
  flexDirection: "column", // 세로 방향 정렬
  fontSize: "2rem",
  gap: 2,
  color: "#D9D9D9"
});
// const StyledText = css({
//   color: "white",
//   fontSize: "0.8rem"
// });

// const StyledCategory = css({
//   color: "white",
//   fontWeight: 600
// });
const StyledContainer = css({
  display: "flex",
  flexDir: "column",
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
