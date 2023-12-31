'use client'
import { styled } from "styled-components";
import Image from "next/image"
import nhbank from "../../public/nhbank/nhMainMobile.jpg"
import { useRouter } from 'next/navigation'
export default function Nhbank() {
    const NhMain = styled.div`
        margin : 0;
        padding : 0%;
        width : 100%;
        height : 100%;
        img {
            height : 100%;
            object-fit : scale-down;
            width : 100%;
            cursor:pointer;
        }
    `
    const router = useRouter()
    return (
        <>
            <NhMain>
                <img onClick={()=>router.push('/nhbank/login')} src="https://github.com/geniefairy/antiphishing/assets/147686599/363e0912-a1c6-4d70-af20-287eda6d7d8b" alt={"농협은행 메인페이지입니다."} />
            </NhMain>
        </>
    )
}
