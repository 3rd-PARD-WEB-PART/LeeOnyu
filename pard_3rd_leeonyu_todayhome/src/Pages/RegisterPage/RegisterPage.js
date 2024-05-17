import './RegisterPage.css'
import React, { useEffect, useState } from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { registerInfoState } from '../Atom';
import { useRecoilState } from 'recoil';
import { getUserData } from '../../AxiosAPI';

function RegisterPage() {
    const [registerInfo, setRegisterInfo] = useRecoilState(registerInfoState);
    const [userData, setUserData] = useState({}); // 유저 데이터를 저장할 state 추가

    // Define handleInputChange function to update the registerInfo state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserData(1); // 예시로 사용자 ID가 1인 데이터 가져오기
                setUserData(response.data); // 가져온 데이터를 state에 저장
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []); // 마운트될 때 한 번만 실행

    return (
        <div className='container'>
            <div className='header'>
                <img className='rlogo-img' alt='logo' src={logo}></img>
            </div>
            <div className='input-container'>
                <div className='regis-container'>
                    <p className='rtitle-text'>회원가입</p>
                    <p className='sub-text'>이메일</p>
                    <input className='input-style' type="text" name="email" value={userData.email || ''} onChange={handleInputChange} placeholder="이메일" />
                    <p className='sub-text'>비밀번호</p>
                    <p className='sub-text'>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                    <input className='input-style' type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="비밀번호" />
                    <p className='sub-text'>비밀번호 확인</p>
                    <input className='input-style' id='input' type='password' placeholder='비밀번호 확인'></input>
                    <p className='sub-text'>닉네임</p>
                    <p className='sub-text'>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
                    <input className='input-style' type="text" name="nickname" value={userData.nickname || ''} onChange={handleInputChange} placeholder="닉네임" />
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
