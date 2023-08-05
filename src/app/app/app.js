import style from "./app.module.css"
import Image from "next/image";
import img1 from "../../../public/img/Group 12345.png"
import img2 from "../../../public/img/Group 2.png"
import Logo from "../../../public/img/Pakan Logo_TYPES-05.png"
import android from "../../../public/img/Android_B.png"
import google from "../../../public/img/GooglePlay_B.png"
import apple from "../../../public/img/Apple_iOS_G.png"

const App = () => {
  return (
    <div className={style.container}>
      <div className={style.app}>
        <div className={style.mobile}>
          <div className={style.mobile_photo}>
            <Image
              src={img1}
              className={style.mobile}
              id={style.num2}
            />
            <Image
              src={img2}
              className={style.mobile}
              id={style.num1}
            />
          </div>
        </div>
        <div className={style.mobile_text}>
          <div className={style.logo_section}>
            <div className={style.logo_pakan}>
              <Image src={Logo}/>
            </div>
            <div className={style.text_logo}>
              <h2>خشکشویی در جیب شما</h2>
              <p>اپلیکیشن پاکان</p>
            </div>
          </div>
          <div className={style.explain_logo}>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته،
            </p>
          </div>
          <div className={style.download_section}>
            <div>
              <Image src={android} />
              <p>دانلود مستقیم</p>
            </div>
            <div>
              <Image src={google}/>
              <p>GooglePlay</p>
            </div>
            <div>
              <div className={style.circle}></div>
              <p>وب اپلیکیشن</p>
            </div>
            <div>
              <Image src={apple}/>
              <p>iOS نسخه</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
