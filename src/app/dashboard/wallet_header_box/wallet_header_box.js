import React from "react";
import style from "./wallet_header_box.module.css"

export default function Wallet_header_box(){
    
    return(
        <>
        <div className={style.last_req}>
        <div>
            گردش حساب 
        </div>
        <div>
            {/* <img className={`${style.fa} ${style.fa_angle_left}`}></img> */}
            مشاهده همه
        </div>
    </div>
    <div className={style.box}>
        <div className={style.num_req}>
                <div>
                    موجودی کیف پول شما   
                </div>
                <div>
                    ریال ۴۵۰.۰۰۰
                </div>
        </div>
        <div className={style.account}>
            <div>
                <div>#</div>
                <div>1</div>                            
                <div>2</div>
                <div>3</div>

            </div>
            <div>
                <div>شماره درخواست</div>
                <div>1234</div>                            
                <div>2567</div>
                <div>3246</div>
            </div>
            <div>
                <div>تاریخ</div>
                <div>۱۳۹۸/۱۲/۳۰
                </div>                            
                <div>۱۳۹۸/۱۲/۳۰
                </div>
                <div>۱۳۹۸/۱۲/۳۰

                </div>
            </div>
            <div>
                <div>مبلغ تراکنش </div>
                <div>۵۴.۰۰۰
                </div>                            
                <div>۳۴.۰۰۰</div>
                <div>۳۴.۰۰۰

                </div>
            </div>
            <div>
                <div> باقی مانده</div>
                <div>۱۵.۰۰۰
                </div>                            
                <div>۶۹.۰۰۰</div>
                <div>۶۹.۰۰۰</div>
            </div>
        </div>
    </div>
    </>
    )
}