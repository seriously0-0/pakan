// import React from "react";
// import style from "./header.module.css";
// import OptionMenu from "./OptionMenu";
import OptionMenu from "../optionMenu.js/optionMenu"
import style from "./header.module.css"

export default function Header(){
    return(
        <>
          <div className={style.header}>
                 <div className={style.menubar}>
                     <div className={style.profile}>
                         <img src="/images/هدیه-تهرانی.png"/>
                     </div>
                     <div className={style.rightside}>
                         <div className={style.logo}>
                             <img src="/images/Pakan Logo_TYPES-01.png"/>
                         </div>
                         <div className={style.option_menu}>
                             <OptionMenu>
                                 درباره ما
                             </OptionMenu>
                             <OptionMenu>
                                 خدمات
                             </OptionMenu>
                             <OptionMenu>
                                 خدمات سازمانی
                             </OptionMenu>
                             <OptionMenu>
                                 نحوه درخواست
                             </OptionMenu>
                             <OptionMenu>
                                 محدوده سرویس دهی
                             </OptionMenu>
                             <OptionMenu>
                                 تماس با ما
                             </OptionMenu>
                             <OptionMenu>
                                 ویترین
                             </OptionMenu>
                             <OptionMenu>
                                 بلاگ
                             </OptionMenu>
                         </div>
                     </div>
                 </div>
            </div>
        </>
    )
}

