// import Image from 'next/image'
"use clients";
import Link from "next/link";
import NavBar from "./navbar/navbar";
import Loc from "./loc/loc";
import WhyPakan from "./whyPakan/whyPakan";
import Workroom from "./workroom/workroom";
import Service from "./service/service";
import App from "./app/app";
import Comments from "./comments/comments";
import Trust from "./trust/trust";
import Vitrin from "./vitrin/vitrin";
import Branch from "./branch/branch";
import Footer from "./footer/footer";
export default function Home() {
  return (
    <div>
      <Link href="/dashboard">dash</Link>
      <NavBar />
      <Loc />
      <WhyPakan />
      <Workroom />
      <Service />
      <App />
      <Comments />
      <Trust />
      <Vitrin />
      <Branch />
      <Footer/>
    </div>
  );
}
