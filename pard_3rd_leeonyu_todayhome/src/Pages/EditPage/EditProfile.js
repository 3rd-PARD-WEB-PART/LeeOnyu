import logo from '../ProfilePage/img/Header_1.png';
import search from '../ProfilePage/img/search.png';
import icon1 from '../ProfilePage/img/icon1.png'
import icon2 from '../ProfilePage/img/icon2.png'
import icon3 from '../ProfilePage/img/icon3.png'
import proimg from '../ProfilePage/img/proimg.jpg'
import profile from '../ProfilePage/img/profile.png'
import vector from '../ProfilePage/img/Vector4.png'
import '../ProfilePage/Profile.css';
import './EditPage.css'
import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil'; 
import { registerInfoState } from '../Atom';
import { patchUserData, getUserData } from '../../AxiosAPI';

function EditProfile(){ 
    const [profileImage, setProfileImage] = useState(null);
    const [userData, setUserData] = useState({}); // 유저 데이터를 저장할 state 추가
    const [registerInfo, setRegisterInfo] = useRecoilState(registerInfoState);
    const [isModified, setIsModified] = useState(false); // 수정된 사항이 있는지 여부를 저장하는 상태

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserData(1); // 예시로 사용자 ID가 1인 데이터 가져오기
                setUserData(response.data); // 가져온 데이터를 state에 저장
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []); // 마운트될 때 한 번만 실행

    useEffect(() => {
        // 이 페이지가 처음 렌더링될 때, 기존 정보를 불러와서 registerInfo 상태에 설정
        setRegisterInfo(userData);
    }, [userData]); // userData가 변경될 때마다 실행

    useEffect(() => {
        const updateUserData = async () => {
            try {
                if (isModified) { // 수정 사항이 있는 경우에만 patch 진행
                    const response = await patchUserData(userData.id, registerInfo);
                    console.log('User data updated successfully:', response);
                    setIsModified(false); // patch 이후 수정 사항 초기화
                }
            } catch (error) {
                console.error('Error updating user data:', error);
            }
        };
        updateUserData();
    }, [isModified, registerInfo, userData]);

    
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // 선택된 파일
        if (file) {
            const reader = new FileReader(); // 파일을 읽기 위한 FileReader 객체를 생성
            reader.onload = function (e) { // 파일 읽기가 완료되었을 때의 이벤트 핸들러를 정의
            setProfileImage(e.target.result); // 읽은 파일을 프로필 이미지로 설정
            };
            reader.readAsDataURL(file); // 파일을 읽어서 Data URL로 변환
        } else {
        setProfileImage(null); // 파일이 선택되지 않은 경우 프로필 이미지를 초기화
        }
        setIsModified(true); // 수정 사항 발생
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
        setIsModified(true); // 수정 사항 발생

    };
    
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
                <button className='write-button'>글쓰기 <img src={vector} alt='vector'></img></button>
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
                    {/* 이메일 Container */}
                    <Container Height='45px'>
                        <p><Text fontSize='15px'>이메일</Text><br></br><Text fontSize='15px' Color='#757575'>* 필수항목</Text></p>                        
                        <Container Width='400px' Height='40px'>
                            <Input type="text" name="email" value={registerInfo.email} onChange={handleInputChange} placeholder="이메일" />
                        </Container>
                    </Container>
                    {/* 이메일 변경 글씨 */}
                    <Container Height='50px' MarginLeft='180px' Color='#9E9E9E'>
                        <Text fontSize='15px' Color='#9E9E9E' FontWeight='700'>이메일을 변경하시려면 운영자에게 이메일을 보내주세요.</Text> 
                    </Container>
                    {/* 별명 입력칸 */}
                    <Container Height='45px' MarginTop='20px'>
                        <p><Text fontSize='15px'>별명</Text><br></br><Text fontSize='15px' Color='#757575'>* 필수항목</Text></p>                        
                        <Container Width='400px' Height='40px' >
                            <Input type="text" name="nickname" value={registerInfo.nickname} onChange={handleInputChange} placeholder="별명" />
                        </Container>
                    </Container>
                    {/* 홈페이지 입력칸 */}
                    <Container Height='45px' MarginTop='30px'>
                        <Text fontSize='15px' MarginRight='10px'>홈페이지</Text>                      
                        <Container Width='400px' Height='40px' >
                            <Input type="text" name="homepage" value={registerInfo.homepage} onChange={handleInputChange} placeholder="홈페이지" />
                        </Container>
                    </Container>
                    <Container Height='45px' MarginTop='20px'>
                        <Text fontSize='15px' MarginRight='35px'>성별</Text>                      
                        <Container Width='400px' Height='40px'>
                            <label class='radio-label'>
                            <input type="radio" name="gender" value="0" // 여성을 나타내는 값
                                checked={registerInfo.gender === "0"} // gender가 0일 때 체크됨
                                onChange={handleInputChange}
                            />
                            <span>여성</span>
                            <input type="radio" name="gender" value="1" // 남성을 나타내는 값
                                checked={registerInfo.gender === "1"} // gender가 1일 때 체크됨
                                onChange={handleInputChange}
                            />
                            <span>남성</span>

                            </label>
                        </Container>
                    </Container>
                    {/* 홈페이지 입력칸 */}
                    <Container Height='45px' MarginTop='20px'>
                        <Text fontSize='15px' MarginRight='10px'>생년월일</Text>                      
                        <Container Width='400px' Height='40px' >
                            <Input type="date" name="date" value={registerInfo.date} onChange={handleInputChange} placeholder="생년월일" />
                        </Container>
                    </Container>
                    <Container Height='230px' MarginTop='30px' Align='flex-start'>
                        <Text fontSize='15px' MarginRight='-18px'>프로필 이미지</Text>
                        <Container Width='400px' Height='230px' MarginLeft='70px'>
                        <form method="post" enctype="multipart/form-data">
                            <div className="button">
                            <label htmlFor="chooseFile">
                                {profileImage ? (
                                <img src={profileImage} width='200px' height='200px' alt="프로필 이미지" />
                                ) : (
                                <img src={proimg} width='200px' height='200px' alt="프로필 이미지" />
                                )}
                            </label>
                            </div>
                            <input
                            type="file"
                            id="chooseFile"
                            name="chooseFile"
                            accept="image/*" // 이미지 파일만 가져오도록 함
                            onChange={handleImageChange} // 파일 입력이 변경되었을 때 handleImageChange 함수를 호출
                            />
                        </form>
                        </Container>
                    </Container>
                    {/* 한줄 소개 입력칸 */}
                    <Container Height='45px' MarginTop='20px'>
                        <Text fontSize='15px' MarginRight='10px'>한줄 소개</Text>                      
                        <Container Width='400px' Height='40px' >
                        <Input type="text" name="introduce" value={registerInfo.introduce} onChange={handleInputChange} placeholder="한줄 소개" />
                        </Container>
                    </Container>
                    <div className='id-title'> {/* 회원정보수정 타이틀 */}
                        <Container Width='1000px' Height='50px' MarginLeft='40px'></Container>
                        <StyledLink to='/profile'>
                            <button className='write-button'>수정하기</button>                                  
                        </StyledLink>
                    </div>
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

const StyledLink = styled(Link)`
    text-decoration: none; /* 밑줄 없애기 */
    color: inherit; /* 부모 요소로부터 상속받은 색상 사용 */
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
    margin-left: ${(props) => props.MarginLeft || '0px'};
    margin-right: ${(props) => props.MarginRight || '0px'};
    margin-top: ${(props) => props.MarginTop};
    font-weight: ${(props) => props.FontWeight};
    font-size: ${(props) => props.fontSize || '13px'};
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
    align-items: ${(props) => props.Align || "center"}; /* 세로 방향 가운데 정렬 */
    
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
    font-size: 15px;
    padding-left: 10px;
`

export default EditProfile;