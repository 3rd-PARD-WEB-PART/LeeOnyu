import './RegisterPage.css'
import React from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function RegisterPage() {
    return (
        <div className='container'>
            <div className='header'>
                <img className='rlogo-img' alt='logo' src={logo}></img>
            </div>
            <div className='input-container'>
                <div className='regis-container'>
                    <p className='rtitle-text'>회원가입</p>
                    <p className='sub-text'>이메일</p>
                    <input id='input' type='text' placeholder='이메일'></input>
                    <p className='sub-text'>비밀번호</p>
                    <p className='sub-text'>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                    <input id='input' type='text' placeholder='비밀번호'></input>
                    <p className='sub-text'>비밀번호 확인</p>
                    <input id='input' type='text' placeholder='비밀번호 확인'></input>
                    <p className='sub-text'>닉네임</p>
                    <p className='sub-text'>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
                    <input id='input' type='text' placeholder='별명 (2~15자)'></input>
                    <StyledLink to='/profile'>
                        <button className='btu-font'>회원가입하기</button>
                    </StyledLink>
                    <p className='login-text'>이미 아이디가 있으신가요?<div className='underline'>로그인</div></p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;

const StyledLink = styled(Link)`
    text-decoration: none; /* 밑줄 없애기 */
    color: inherit; /* 부모 요소로부터 상속받은 색상 사용 */
`;