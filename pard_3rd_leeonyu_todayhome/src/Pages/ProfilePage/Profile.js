import logo from './img/Header_1.png';
import search from './img/search.png';
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import profile from './img/profile.png'
import vector from './img/Vector4.png'
import like from './img/like.png'
import coupon from './img/coupon.png'
import red from './img/red.png'
import menu from './img/menu.png'
import './Profile.css';
import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; // Link 가져오기
// import { useRecoilValue } from 'recoil'; 
// import { registerInfoState } from '../Atom';
import { getUserData } from '../../AxiosAPI'; // getUserData 함수 추가

function Profile(){
    const [likes, setLikes] = useState(0);
    const [userData, setUserData] = useState({}); // API로 받아온 데이터를 저장할 state 추가
    function handleLike() {
        setLikes(likes + 1);
        document.getElementById("img").src = red;
        console.log("좋아요를 눌렀습니다!");
    }

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

    return(
        <div>
            <div className="header-container">
                <img className='logo-img' alt='logo' src={logo}></img>
                <HeadButton fontSize ="18px" MarginLeft='40px'>커뮤니티</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='30px'>쇼핑</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='30px'>인테리어/생활</HeadButton>
                <div className='search-container'>
                    <img className='search-img' alt='search1' src={search}></img>
                    <input className='search-input' type='text' placeholder='통합검색'></input>
                </div>
                <IconButton Width='18px' Height='18.5px' MarginLeft='25px'><img src={search} alt='search'></img></IconButton>
                
                <IconButton Width='18px' Height='18.5px' MarginLeft='35px'><img src={icon1} alt='icon1'></img></IconButton>
                <IconButton Width='18px' Height='18.5px' MarginLeft='25px'><img src={icon2} alt='icon2'></img></IconButton>
                <IconButton Width='18px' Height='18.5px' MarginLeft='25px'><img src={icon3} alt='icon3'></img></IconButton>
                <IconButton Width='43px' Height='43px' MarginLeft='25px'><img src={profile} alt='profile'></img></IconButton>
                <button className='write-button'>글쓰기 <img src={vector} alt='vextor'></img></button>
            </div>
            <div className="header-mobile">
                <div className='mobile-icon'>
                    <IconButton Width='18px' Height='18.5px' MarginLeft='10px'><img width='25px'src={menu} alt='search'></img></IconButton>
                </div>
                <div className='logo-container'>
                    <img className='logo-img' alt='logo' src={logo}></img>
                </div>
                <div className='mobile-icon'>
                    <IconButton Width='18px' Height='18.5px' MarginLeft='25px'><img src={search} alt='search'></img></IconButton>
                    <IconButton Width='18px' Height='18.5px' MarginLeft='25px'><img src={icon3} alt='icon3'></img></IconButton>
                </div>
            </div>
            <div className='header2-container'>
                <HeadButton fontSize ="18px" MarginLeft='40px' Color='#35c5f0'>프로필</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='40px'>나의 쇼핑</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='40px'>나의 리뷰</HeadButton>
                {/* StyledLink를 사용하여 스타일이 지정된 Link 컴포넌트로 버튼을 감싸기 */}
                <StyledLink to="/edit">
                    <HeadButton fontSize="18px" MarginLeft="40px">설정</HeadButton>
                </StyledLink>
            </div>
            <div className='header2-container'>
                <HeadButton fontSize ="15px" Color='#35c5f0'>모두보기</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>사진</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>집들이</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>노하우</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>질문과 답변</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>스크랩북</HeadButton>
                <HeadButton fontSize ="15px" MarginLeft='40px'>좋아요</HeadButton>
            </div>
            <div className='main-container'>
                <div className='profile-container'>
                    <div className='info-container'>
                        <img src={profile} width='130px' height='130px' alt='profile'></img><br></br>
                        <Text fontSize='26px' FontWeight='bold'>{userData.nickname}</Text>
                        <Text fontSize='13px' MarginTop='10px'>팔로워 <num>0</num>  팔로잉 <num>0</num></Text><br></br>
                        <Link to="/edit" className="set-button">설정</Link>                       
                    </div>
                    <div className='profile-info'>
                        <div className='info-img'>
                            <img src={profile} width = '100%' alt='profile'></img>
                        </div>
                        <div className='info-word'>
                            <Text fontSize='26px' FontWeight='bold'>{userData.nickname}</Text>
                            <Text fontSize='13px' MarginTop='10px'>팔로워 <num>0</num>  팔로잉 <num>0</num></Text><br></br>
                            <Link to="/edit" className="set-button">설정</Link> 
                        </div>
                    </div>
                    <div className='like-container'>
                        <div className='icon-container'>
                            <img src={icon1} width='23px' height='24.9px' alt='icon1'></img>
                            <Text fontSize='13px' MarginTop='10px'> 스크랩북</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>0</Text>
                        </div>
                        <div className='icon-container'>
                            <IconButton Width='30px' Height='25.91px' onClick={handleLike}><img id='img' src={like}  alt='icon1' ></img></IconButton>
                            <Text fontSize='13px' MarginTop='10px'>좋아요</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>{likes}</Text>
                        </div>
                        <div className='icon-container'>
                            <img src={coupon}  width='28.5px' height='21.92px'  alt='icon1'></img>
                            <Text fontSize='13px' MarginTop='10px' width='30px' height='26px'>내 쿠폰</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>0</Text>
                        </div>
                    </div>
                </div>
                <div className='item-container'>
                    <div className='add-container'>
                        <Text fontSize='18px' FontWeight='bold' MarginTop='50px'>사진&nbsp;</Text>
                        <Text fontSize='18px' FontWeight='bold' Color='#35c5f0'>0</Text>
                        <div className='add2-container'>
                            <Text fontSize='13px' Color='#757575' FontWeight='bold'>+ 첫 번째 사진을 올려보세요</Text>
                        </div>
                    </div>
                    <div className='add-container'>
                        <Text fontSize='18px' FontWeight='bold' MarginTop='50px'>집들이&nbsp;</Text>
                        <Text fontSize='18px' FontWeight='bold' Color='#35c5f0'>0</Text>
                        <div className='add2-container'>
                            <Text fontSize='13px' Color='#757575' FontWeight='bold'>+ 첫 번째 집들이를 올려보세요</Text>
                        </div>
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
    /* Link에 적용할 스타일 */
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
    margin-left: ${(props) => props.MarginLeft};
    margin-top: ${(props) => props.MarginTop};
    color: #a2a2a2;
    font-weight: ${(props) => props.FontWeight};
    font-size: ${(props) => props.fontSize};
    text-align: center; /* 글자 가운데 정렬 */
    color: ${(props) => props.Color || "#000000"}; //검정색을 디폴드 값으로 지정
    display: inline-block; /* 텍스트를 한 줄로 표시 */
`;


export default Profile;