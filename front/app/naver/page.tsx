'use client'
import { styled } from "styled-components";
import Image from "next/image"
import naver from "../../public/naver/naverMobile.jpg"
import { useRouter } from 'next/navigation'
export default function Naver() {
    const NaverMain = styled.div`
        margin : 0;
        padding : 0%;
        width : 100%;
        img {
            padding: 0;
            margin : 0;
            height : 100%;
            object-fit : contain;
            width : 100%;
            cursor:pointer;
        }
    `
    const router = useRouter()
    return (
        <>
            <NaverMain>
                <img onClick={()=>router.push('/naver/login')} src='https://github.com/geniefairy/antiphishing/assets/147686599/347f3f91-3593-4bd1-a6f4-1cbbf91faf6f' alt={"네이버 메인페이지입니다."} />
            </NaverMain>
        </>
    )
}
