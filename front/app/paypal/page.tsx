'use client'
import { styled } from "styled-components";
import Image from "next/image"
import paypalnav from "../../public/paypal/paypalMainheader.png"
import paypal from "../../public/paypal/paypalMain.png"
import paypal1 from "../../public/paypal/paypalMain1-2.png"
import paypal2 from "../../public/paypal/paypalMain2.png"
import paypal3 from "../../public/paypal/paypalMain3.png"

import { useRouter } from 'next/navigation'
export default function Paypal() {
    const PaypalMain = styled.div`
        margin : 0;
        padding : 0%;
        width : 100%;
        display:flex;
        flex-direction : column;
        align-items:center;
        justify-content : center;
        img {
            height : 100%;
            object-fit : contain;
            width : 100%;
            cursor:pointer;
        }
        .text{
            width : 80%;
        }
    `
    const router = useRouter()
    return (
        <>
            <PaypalMain>
                <img onClick={()=>router.push('/paypal/login')} src="https://github.com/geniefairy/antiphishing/assets/147686599/026aa416-6510-4c18-ba9c-6b49d0a277a7" alt={"페이팔 메인페이지입니다."} />
                <img src="https://github.com/geniefairy/antiphishing/assets/147686599/57f1504d-7aba-4687-9f9f-9a9a7746b05f" alt={"페이팔 메인페이지입니다."} />
                <img className="text" src="https://github.com/geniefairy/antiphishing/assets/147686599/a1424eb8-0948-4e51-b55d-c82fbde6d9ec" alt=""/>
                <img src="https://github.com/geniefairy/antiphishing/assets/147686599/4c808ea3-3165-4978-83c2-f88fb80e93b2" alt=""/>
                <img src="https://github.com/geniefairy/antiphishing/assets/147686599/0eaebbdf-ed01-48fc-bfca-8a3be4a96173" alt=""/>

            </PaypalMain>
        </>
    )
}
