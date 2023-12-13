'use client'

import Image from 'next/image'
import Link from 'next/link'
import { styled } from "styled-components";

const MainPage = styled.div`
        margin : 0;
        padding : 0%;
        width : 100%;
        display:flex;
        flex-direction : column;
        align-items:center;
        justify-content : center;
    `
  const NaverIcon = styled.div`
    width : 200px;
    min-height : 100px;
    background-image: url(../../anti-phishing/public/naver/naverLogo.png);
  `
  const PaypalIcon = styled.div`
    width : 200px;
    min-height : 100px;
    background-image: url(../../anti-phishing/public/paypal/paypalLogo.png);
  `
  const NhIcon = styled.div`
    min-width : 200px;
    min-height : 100px;
    background-image: url("https://github.com/geniefairy/antiphishing/assets/147686599/e1d493ac-dafe-4b4b-9bb4-a0ccf0bd0000");
  `
export default function Home() {
  return (
    <MainPage className="flex min-w-screen min-h-screen flex-col items-center justify-center p-24">
      <NaverIcon>
        <image href={'/naver'} >Naver</image>
      </NaverIcon>
      <PaypalIcon>
        <Link href={'/paypal'} >Paypal</Link>
      </PaypalIcon>
      <NhIcon>
        <Link href={'/nhbank'} >NongHyup</Link>
      </NhIcon>
    </MainPage>
  )
}
