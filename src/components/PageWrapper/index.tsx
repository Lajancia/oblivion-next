"use client";
import { ReactElement } from "react";
import { css } from "../../../styled-system/css";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
interface ChildrenProps {
  children: ReactElement;
}
const PageWrapper = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const [loading, setLoading] = useState(true);
  // 예: 상태 또는 쿠키를 통해 인증 확인

  useEffect(() => {
    const isAuthenticated = Cookies.get("LOGIN_STATE");
    if (!isAuthenticated && pathName !== "/login") {
      router.replace("/login"); // 로그인 페이지로 이동
    } else {
      setLoading(false);
    }
  }, [pathName, router]);

  if (loading) {
    return <></>;
  }
  return <div className={StyledWrapper}>{children}</div>;
};

export default PageWrapper;

const StyledWrapper = css({
  padding: "1.5rem",
  maxWidth: "400px",
  minHeight: "680px",
  overflowX: "hidden",
  height: "100dvh",
  margin: "auto",
  overflowY: "scroll"
});
