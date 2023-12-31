'use client'

import Image from "next/image"
import { styled } from "styled-components";
import naverLang from "../public/naver/naverLoginLan.png"
import naverLogo from "../public/naver/naverLogo.png"
import naverLoginBtn from "../public/naver/NaverLoginBtn.png"
import naverFooter from "../public/naver/NaverFooter.png"
import { useRouter } from 'next/navigation'

const NaverLogin = () => {
    const router = useRouter()

    const NaverLogin = styled.div`
        width : 100%;
        display : flex;
        justify-content : center;
        align-content:center;
        align-items : center;
        padding : 2% 0 0 0;
        flex-direction : column;
        
        
    `
    const NaverLang = styled.div`
        width : 100%;
        display: flex;
        justify-content: flex-end;
        img{
            object-fit : contain;
            max-width : 110px;
            height : auto;
        }
    `
    const NaverLogo = styled.div`
        img{
            max-width :  180px;
            height : auto;
            object-fit:contin;
        }
        margin-bottom : 1em;
    `
    const NaverLoginBox = styled.div`
        margin-top : 20px;
        border : 1px solid #c6c6c6;
        border-radius : 7px;
        width :90%;
        display : flex;
        flex-direction : column;
        align-items : center;
    `
    const NaverTab = styled.div`
        display:flex;
        width : 100%;
        background-color : #e3e3e3;
        border-radius : 7px 7px 0 0;
        
        p{
            color : grey;
            background-color : white;
            width : 33.3%;
            padding:10px 0;
            margin:0;
            height : 100%;
            text-align : center;
            border-style: solid;
            border-color: #c6c6c6;
            border-width :0 1px 1px 0;
            border-radius : 7px 7px 0 0;
            min-height : 2em;
            display : flex;
            justify-content: center;
            align-items : center;
            cursor : pointer;
        }
        div{
            color : #777777;
            width : 33.3%;
            padding:10px 0;
            margin:0;
            height : 100%;
            text-align : center;
            border-style: solid;
            border-color: #c6c6c6;
            border-width :0 1px 1px 0;
            border-radius : 0 7px 0 0;
            min-height : 2em;
            display : flex;
            justify-content: center;
            align-items : center;
            cursor : pointer;
        }
    `
    const NaverInputId = styled.input`
        width : 95%;
        padding : 0.5em;
        height : 2.5em;
        border : solid #c6c6c6 1px;
        border-radius : 10px 10px 0 0;
    `
    const NaverInputPwd = styled.input`
        width : 95%;
        padding : 0.5em;
        height : 2.5em;
        border : solid #c6c6c6 1px;
        border-width : 0 1px 1px 1px;
        border-radius : 0 0 10px 10px;
    `
    const NaverInputBox = styled.div`
        
        display : flex;
        flex-direction : column;
        align-items:center;    
        width : 100%;
        object-fit : contain;
    `
    const NaverLoginInner = styled.div`
        display : flex;
        flex-direction : column;
        align-items:center;
        padding : 2em 3em;
        width : 80%;
    `
    const LoginSetting = styled.div`
        width : 95%;
        padding : 0 0.5em 0 0.5em;
        display : flex;
        font-size : 14px;
        justify-content: space-between;
    `
    const NaverLoginBtnDiv = styled.div`
        max-width : 100%;
        cursor : pointer;
        img {
            object-fit : contain;
            max-width : 100%;
            height : 3em;
        } 
    `
    const NaverSearch = styled.div`
        display : flex;
        font-size : 14px;
        width : 20em;
        justify-content: space-between;
        color: #c6c6c6;
        align-items: center;
        p {
            cursor : pointer;
        }
    `
    const NaverFooterBox = styled.div`
        width : 90%;
        img {
            object-fit : contain;
            max-width : 100%;
            height : 8em;
        }
    `
    return (
        <>
            <NaverLogin>
                <NaverLang><img src='https://github.com/geniefairy/antiphishing/assets/147686599/09c926ad-4e0a-4da6-bfb8-dab1ed61d9dd' alt="언어설정" /></NaverLang>
                <NaverLogo><img src='https://github.com/geniefairy/antiphishing/assets/147686599/b50e1a51-e20d-4bfb-a34b-d8367df97dfe' alt="로고" /></NaverLogo>
                <NaverLoginBox>
                    <NaverTab>
                        <p>ID로 로그인</p>
                        <div>일회용 번호</div>
                        <div>QR코드</div>
                    </NaverTab>
                    <NaverLoginInner>
                        <NaverInputBox>
                            <NaverInputId type="text" placeholder="아이디"/>
                            <NaverInputPwd type="text" placeholder="비밀번호"/>
                        </NaverInputBox>
                        <LoginSetting>
                            <p>로그인 상태 유지</p>
                            <p>IP보안</p>
                        </LoginSetting>
                        <NaverLoginBtnDiv onClick={()=>router.push('/naver')}>
                            <img src='https://github.com/geniefairy/antiphishing/assets/147686599/c316850a-68e4-4b0a-9345-696c131bbd6a' alt="로그인 버튼"/>
                        </NaverLoginBtnDiv>
                    </NaverLoginInner>
                </NaverLoginBox>
                <NaverSearch>
                    <p>비밀번호 찾기</p>
                    <span>|</span>
                    <p>아이디 찾기</p>
                    <span>|</span>
                    <p>회원가입</p>
                </NaverSearch>
                <NaverFooterBox>
                    <img src="https://github.com/geniefairy/antiphishing/assets/147686599/15bd7fb3-64b9-4d30-8976-c251465a08bf" alt="푸터 이미지" />
                </NaverFooterBox>
            </NaverLogin>
        </>
    )
}
export default NaverLogin;