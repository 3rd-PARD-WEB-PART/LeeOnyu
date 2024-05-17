import axios from "axios";

export const getUserData = async(id) => {
    try{
        const response = await axios
        .get(`http://localhost:3001/users/${id}`)
        console.log(response)
        return response;
    }catch(err){
        console.error(err);
    }
};


export const patchUserData = async (userId, userData) => {
    try {
        const response = await axios.patch(`http://localhost:3001/users/${userId}`, userData);
        console.log('User data updated successfully:', response.data);
        return response.data;
    } catch (err) {
        console.error('Error updating user data:', err);
        throw err; // 에러를 호출한 곳으로 전파하여 처리할 수 있도록 함
    }
};