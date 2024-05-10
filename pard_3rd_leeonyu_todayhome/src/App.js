import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; // RecoilRoot 추가
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import Profile from './Pages/ProfilePage/Profile';
import EditProfile from './Pages/EditPage/EditProfile';

function App() {
    return (
        <RecoilRoot> {/* RecoilRoot로 감싸기 */}
            <Router>
                <Routes>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/' element={<RegisterPage />} />
                    <Route path='/edit' element={<EditProfile />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}

export default App;
