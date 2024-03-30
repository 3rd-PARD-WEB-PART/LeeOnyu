import logo from './img/Header_1.png';
import search from './img/search.png';
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import profile from './img/profile.png'
import vector from './img/Vector4.png'
import like from './img/like.png'
import coupon from './img/coupon.png'
import './Profile.css';
import styled from "styled-components";

function Profile(){
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
                <HeadButton fontSize ="18px" MarginLeft='40px' Color='#35c5f0'>프로필</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='40px'>나의 쇼핑</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='40px'>나의 리뷰</HeadButton>
                <HeadButton fontSize ="18px" MarginLeft='40px'>설정</HeadButton>
            </div>
            <div className='header2-container'>
                <HeadButton fontSize ="15px" MarginLeft='40px' Color='#35c5f0'>모두보기</HeadButton>
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
                        <p>
                        <img src={profile} width='130px' hegiht='130px' alt='profile'></img><br></br><br></br>
                        <pre><Text fontSize='26px' FontWeight='bold' MarginTop='-20px'>이온유</Text>
                        <Text fontSize='13px' MarginTop='10px'>팔로워 <num>0</num>  팔로잉 <num>0</num></Text>
                        </pre>                        
                        </p>
                        <button className='set-button'>설정</button>                        
                    </div>
                    <div className='like-container'>
                        <div className='icon-container'>
                            <img src={icon1} width='23px' hegiht='24.9px' alt='icon1'></img>
                            <Text fontSize='13px' MarginTop='10px'> 스크랩북</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>0</Text>
                        </div>
                        <div className='icon-container'>
                            <img src={like} width='30px' hegiht='25.91px' alt='icon1'></img>
                            <Text fontSize='13px' MarginTop='10px'> 스크랩북</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>0</Text>
                        </div>
                        <div className='icon-container'>
                            <img src={coupon}  width='28.5px' hegiht='21.92px'  alt='icon1'></img>
                            <Text fontSize='13px' MarginTop='10px' width='30px' hegiht='26px'> 스크랩북</Text>
                            <Text fontSize='13px' FontWeight='bold' MarginTop='5px'>0</Text>
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

const IconButton = styled.button`
    background-color: white;
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
    margin-top: ${(props) => props.MarginTop};
    color: #a2a2a2;
    font-weight: ${(props) => props.FontWeight};
    font-size: ${(props) => props.fontSize};
    text-align: center; /* 글자 가운데 정렬 */
    color: black;
`;

//초기 색상을 검정으로 지정
Text.defaultProps = {
    color: 'black',
};

export default Profile;