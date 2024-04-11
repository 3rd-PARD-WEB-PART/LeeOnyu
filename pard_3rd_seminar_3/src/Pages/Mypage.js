import {Navigate} from 'react-router-dom';

const MyPage = ({isLoggedIn, setIsLoggedIn}) =>{
    const handleClick = ()=>{

        setIsLoggedIn(false);
    };

    if(!isLoggedIn){
        return <Navigate to='/login' replace={true}/>;
    }

    return(
        <div>
            <h1>마이페이지</h1>
            <button onCluck={handleClick}>로그아웃</button>
        </div>
    );
};

export default MyPage;