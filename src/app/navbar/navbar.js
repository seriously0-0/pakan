import Image from "next/image";
import style from "./navbar.module.css";
import time from "../../../public/img/Time.png"
import callcenter from "../../../public/img/CallCenter_G.png"
import logo from "../../../public/img/logoPakan.png"
export default function NavBar() {
  return (
    <div className={style.pakan}>
      <div className={style.navbar}>
        <div className={style.backup}>
          <div className={style.daydata}>
            <div>
              <Image src={time}/>
              <p>جمعه ها 9:00 تا 17:00</p>
            </div>
            <div className={style.empty} id={style.empty}></div>
            <div>روز های کاری 8:30 تا 18:00</div>
          </div>
          <div className={style.phone}>
            <Image src={callcenter}/>
            <p>021 - 41774</p>
          </div>
        </div>
        <div className={style.menubar}>
          <div className={style.signin}>
            <div className={style.login}>ورود</div>
            <div>ثبت نام</div>
          </div>
          <div className={style.rightside}>
            <div className={style.logo}>
              <Image src={logo}/>
            </div>
            <div className={style.option_menu}>
              <div>درباره ما</div>
              <div>خدمات</div>
              <div>خدمات سازمانی</div>

              <div>نحوه درخواست</div>
              <div>تماس با ما</div>
              <div>ویترین</div>
              <div>بلاگ</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.welcome_text}>
        <p>خونه تکونی همراه شماییم</p>
        <p>باز و نصب و شستن پرده‌ها باما</p>
      </div>
    </div>
  );
}
