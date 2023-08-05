import Image from "next/image";
import style from "./footer.module.css";
import twitter from "../../public/images/instagram-fill.svg";
import insta from "../../public/images/instagram-fill.svg";
import facebook from "../../public/images/instagram-fill.svg";
import logo from "../../public/images/logo.png";
import logo1 from "../../public/images/logo (1).png";
import dryCert from "../../public/images/dry-cert.png";
import logoType from "../../public/images/Pakan Logo_TYPES-03.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.gray_section}>
        <div className={style.footer - logo}>
          <Image src={logoType} />
        </div>
        <div>
          <div className={style.header}>پاکان</div>
          <div>درباره ما تماس باما</div>
        </div>
        <div>
          <div className={style.header}>امور مشتریان</div>
          <div>سوالات متداول ثبت شکایات</div>
        </div>
        <div>
          <div className={style.header}>اطلاعات بیشتر</div>
          <div>قوانین و مقررات مجوزها و گواهینامه ها</div>
          {/* <div></div> */}
        </div>
        <div>
          <div className={style.header}>ما را دنبال کنید</div>
          <div className={style.social_logo_section}>
            <div>
              <Image
                src={insta}
                alt="instagram logo"
                className={style.social_logo}
              />
            </div>
            <div>
              <Image src={facebook} className={style.social_logo} />
            </div>
            <div>
              <Image src={twitter} className={style.social_logo} />
            </div>
          </div>
        </div>
        <div>
          <Image src={logo} />
          <Image src={logo1} />
          <Image src={dryCert} />
        </div>
      </div>
      <div className={style.orange_section}>
        <div className={style.right_side}>
          <div>
            تمامی حقوق مادی و معنوی برای خشکشویی پاکان محفوظ است. ساخته شده با
            عشق و صلح
          </div>
          <div>۱۳۹۸</div>
        </div>
        <div className={style.left_side}>
          © 2020 | Designed & developed with peace and love in Tehran
        </div>
      </div>
    </div>
  );
};

export default Footer;
