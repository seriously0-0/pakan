import Image from "next/image";
import style from "./vitrin.module.css"
import facebook from "../../public/images/instagram-fill.svg"
import instagram from "../../public/images/facebook-box-fill.png"
import twitter from "../../public/images/twitter-fill.svg"

const Vitrin = () => {
  return (
    <div className={style.vitrin}>
      <div className={style.background}>
        <div className={style.head_vitrin}>
          <h1>فراتر از یک خشکشویی</h1>
          <p>ویترین</p>
        </div>
        <div className={style.vitrinOrg}>
          <div className={style.vitrin_content}>
            <div className={style.vitrin_photo}>
              <img src="./images/DW2_07.png" />
            </div>
            <div className={style.text_vitrin}>
              <h3>لورم ایپسوم متن ساختگی</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته،
              </p>
              <div className={style.footer_vitrin}>
                <div>
                   <Image src={instagram}
                    alt="instagram logo"
                    className={style.social_logo}
                  /> 
                </div>
                <div>
                <Image src={facebook}
                    className={style.social_logo}
                  />
                </div>
                <div>
                <Image src={twitter}
                    className={style.social_logo}
                  />
                </div>
                <div>ویترین ما را به اشتراک بگذارید</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitrin;
