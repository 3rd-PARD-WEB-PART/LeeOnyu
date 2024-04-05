import logo from '../ProfilePage/img/Header_1.png';
import search from '../ProfilePage/img/search.png';
import icon1 from '../ProfilePage/img/icon1.png'
import icon2 from '../ProfilePage/img/icon2.png'
import icon3 from '../ProfilePage/img/icon3.png'
import profile from '../ProfilePage/img/profile.png'
import vector from '../ProfilePage/img/Vector4.png'
import '../ProfilePage/Profile.css';
import './EditPage.css'
import styled from "styled-components";
import React, {useState, useEffect} from 'react';

function EditProfile(){

    return(
        <div>
            <div className="header-container">
                <img className='logo-img' alt='logo' src={logo}></img>
                <HeadButton fontSize ="18px" MarginLeft='40px'>커뮤니티</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='30px'>쇼핑</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='30px'>인테리어/생활</HeadButton>
                <div className='search-container'>
                    <img className='search-img' alt='search' src={search}></img>
                    <input className='search-input' type='text' placeholder='통합검색'></input>
                </div>
                <IconButton Width='18px' Height='18.5px' MarginLeft='35px'><img src={icon1} alt='icon1'></img></IconButton>
                <IconButton Width='18px' Height='18.5px' MarginLeft='25px'><img src={icon2} alt='icon2'></img></IconButton>
                <IconButton Width='18px' Height='18.5px' MarginLeft='25px'><img src={icon3} alt='icon3'></img></IconButton>
                <IconButton Width='43px' Height='43px' MarginLeft='25px'><img src={profile} alt='profile'></img></IconButton>
                <button className='write-button'>글쓰기 <img src={vector} alt='vextor'></img></button>
            </div>
            <div className='header2-container'>
                <HeadButton fontSize ="18px" MarginLeft='40px'>프로필</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='40px'>나의 쇼핑</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='40px'>나의 리뷰</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='40px' Color='#35c5f0'>설정</HeadButton>
            </div>
            <div className='header2-container'>
                <HeadButton fontSize ="15px" MarginLeft='40px' Color='#35c5f0'>회원정보수정</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>알림 설정</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>사용자 숨기기 설정</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>전문가 신청</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>비밀번호 변경</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>추천코드</HeadButton>
            </div>
            <div className='idmain-container'> {/* 밑에 큰 바탕 */}
                <div className='id-container'> {/* 정보 칸 */}
                    <div className='id-title'> {/* 회원정보수정 타이틀 */}
                        <Container Width='1100px' Height='100px' MarginLeft='40px'>
                            <Text fontSize='24px' FontWeight='bold' >회원정보수정</Text>               
                        </Container>
                        <Container Width='100px'><Text fontSize='14px' Color='red' TextDeco='underline'>탈퇴하기</Text></Container>                                        
                    </div>
                    <Container>
                        <p><Text fontSize='15px'>이메일</Text><br></br><Text fontSize='15px' Color='#757575'>* 필수항목</Text></p>
                        
                        <Container Width='400px' Height='auto'>
                        <p>
                            <Input Width='190px' Height='40px'></Input><Text fontSize='15px' Color='#dbdbdb' MarginRight='5px'>@</Text>
                            <Input Width='190px' Height='40px' MarginLeft='5px'></Input>
                            <br></br><Text fontSize='15px' Color='#9E9E9E' MarginRight='5px'>이메일을 변경하시려면 운영자에게 이메일을 보내주세요.</Text>
                        </p>
                        </Container>

                    </Container>
                </div>
            </div>
        </div>
    );
}

/* styled-components 이용 */

const HeadButton = styled.button`
    width: auto;
    font-weight: bold;
    font-size: ${(props) => props.fontSize}; //props로 font-size가변값으로 만들기
    margin-left: ${(props) => props.MarginLeft};
    color: ${(props) => props.Color};
    padding: 0px;
    background-color: white;
    border: none;
    &:hover{
        background-color: white;
        color: #35c5f0;
    }
    `;

const IconButton = styled.button`
    background-color: white;
    line-height: 0;
    border: none;
    width: ${(props) => props.Width};  //props로 width가변값으로 만들기
    padding: 0px;
    height: ${(props) => props.Height};  //props로 height가변값으로 만들기
    margin-left: ${(props) => props.MarginLeft};
    &:hover{
        background-color: white;
    }
    `;



export const Text = styled.div`
    margin-left: ${(props) => props.MarginRight || '0px'};
    margin-top: ${(props) => props.MarginTop};
    font-weight: ${(props) => props.FontWeight};
    font-size: ${(props) => props.fontSize};
    text-align: center; /* 글자 가운데 정렬 */
    color: ${(props) => props.Color || "#000000"}; //검정색을 디폴드 값으로 지정
    display: inline-block; /* 텍스트를 한 줄로 표시 */
    text-decoration :  ${(props) => props.TextDeco || "none"};
`;

export const Container = styled.div`
    margin-top: ${(props) => props.MarginTop};
    background-color: white;
    width: ${(props) => props.Width || "600px"};
    height: ${(props) => props.Height || "100px"};
    display: flex;
    align-items: center; /* 세로 방향 가운데 정렬 */
    margin-left: ${(props) => props.MarginLeft || '40px'};
`;

export const Input = styled.input`
    margin-left: ${(props) => props.MarginLeft || "40px"};
    width: ${(props) => props.Width || "400px"};
    height: ${(props) => props.Height || "40px"};
    border-radius: 3px;
    border: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    &:focus {outline: none;} /* outline 테두리 없애기 */
`

export default EditProfile;