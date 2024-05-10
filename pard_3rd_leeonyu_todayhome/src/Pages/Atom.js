import { atom } from 'recoil';

export const registerInfoState = atom({
    key: 'registerInfoState',
    default: {
        email: '',
        password: '',
        nickname: '',
        homepage: '',
        gender: 0,
        date:'',
        profileImage:'',
        introduce:''
    }
});
