// import Image from 'next/image'
"use client";
import Image from "next/image";
import Header from "./header/header";
import PakanDash from "./pakanDash/pakanDash";
// import { useClient } from 'react-server-components';
import style from "./page.module.css";

export default function Page() {
  // useClient()
  return (
    <div className={style.body}>
      <Header />
      <PakanDash />
    </div>
  );
}
