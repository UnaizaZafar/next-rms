import { Inter } from "next/font/google";

import Link from "next/link";
import React from "react";
import loginPage from './login-page/index'
import analyticPage from './analytics-page/index'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return;
  <>
    <Link href={loginPage}> </Link>
    <Link href={analyticPage}> </Link>

   
  </>;
}
