import { Inter } from "next/font/google";

import React from "react";
import loginPage from './login-page'
import Hardware from "@/components/Hardware";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return(
    <>
    {/* {loginPage} */}
    <Hardware/>
    </>
  );
 
};
