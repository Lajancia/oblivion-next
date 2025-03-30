"use client";
import { useState } from "react";
import { css } from "../../../styled-system/css";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import Link from "next/link";
import Modal from "../CommonModal";
import { useGlitch } from "react-powerglitch";
import { useRouter, usePathname } from "next/navigation";
const HeaderComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  const handleLogout = () => {
    Cookies.remove("LOGIN_STATE");
    Cookies.remove("GUEST_STATE");
    redirect("/login");
  };
  const glitch = useGlitch({
    playMode: "manual",
    glitchTimeSpan: false,
    timing: {
      duration: 650
    }
  });
  const handleRoute = (route: string): void => {
    if (pathname === route) {
      handleCloseMenu(); // Close the menu only if the current path matches
    }
    router.push(route);
  };
  return (
    <>
      <Modal isOpen={openMenu} onRequestClose={handleCloseMenu}>
        <div className={StyledSideMenu}>
          <button className={StyledCloseMenu} onClick={handleCloseMenu}>
            <IoClose />
          </button>
          <div className={StyledCategory}>
            <button onClick={() => handleRoute("/dashboard")}>Dashboard</button>
            <button onClick={() => handleRoute("/info")}>Information</button>
            <button
              ref={glitch.ref}
              onClick={() => {
                glitch.startGlitch();
              }}
            >
              Email
            </button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </Modal>

      <div className={StyledHeader}>
        <Link href={"/dashboard"}>
          <button onClick={handleCloseMenu} className={StyledHeaderText}>
            Dashboard
          </button>
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
  width: "100dvw",
  height: "100dvh",
  backgroundColor: "black",
  color: "white",
  padding: "2rem"
});
const StyledHeader = css({
  display: "flex",
  height: "5%",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: 400
});

const StyledCategory = css({
  height: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "left",
  gap: 4,
  fontSize: "2rem",
  fontWeight: 600
});
const StyledLeftItems = css({
  display: "flex",
  color: "white",
  gap: 2,
  fontSize: "1.5rem"
});
const StyledHeaderText = css({
  color: "white",
  fontSize: "1.5rem",
  fontWeight: 600
});

const StyledMenu = css({
  color: "white",
  fontSize: "2rem"
});

const StyledCloseMenu = css({
  color: "white",
  fontSize: "2rem",
  width: "100%",
  display: "flex",
  justifyContent: "flex-end"
});
