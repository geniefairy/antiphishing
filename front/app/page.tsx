'use client'
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
        background-color : white;
        color : black;
    `
export default function Home() {
  return (
    <MainPage className="flex min-w-screen min-h-screen flex-col items-center justify-center p-24">
      <Link href={'/naver'} >
        <img src='https://github.com/geniefairy/antiphishing/assets/147686599/f61e453c-6d84-4c3f-b521-b784996bce5d' className="MainIcon" ></img>
        </Link>
      <Link href={'/paypal'} >
        <img src='https://github.com/geniefairy/antiphishing/assets/147686599/499f8927-6b4c-4c35-b550-8feb45493c75'className="MainIcon" alt="" />
      </Link>
      <Link href={'/nhbank'} >
        <img src='https://github.com/geniefairy/antiphishing/assets/147686599/bea20762-7ed7-4753-84b1-ee23e90b3577'className="MainIcon" alt="" />
      </Link>
    </MainPage>
  )
}
