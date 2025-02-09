"use client";
// import LoadModal from "@/components/LoadModal";
import dynamic from "next/dynamic";
import { useState } from "react";
import Warning from "../parts/login/Warning";
const EmployeeCode = dynamic(() => import("../parts/login/EmployeeCode"), {
  ssr: false,
});

const Login = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return <>{show ? <Warning /> : <EmployeeCode handleShow={handleShow} />}</>;
};

export default Login;
