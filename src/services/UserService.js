import axios from "axios";

const USER_BASE_API_URL = "http://localhost:8080/users";

class UserService{
    getAllUsers(){
        return axios.get(USER_BASE_API_URL);
    }

    addUser(user){
        return axios.post(USER_BASE_API_URL, user);
    }

    getUserByID(userID) {
        return axios.get(USER_BASE_API_URL + "/"+ userID);
    }

    updateUser(userID, user){
        return axios.put(USER_BASE_API_URL + "/"+userID, user)
    }

    deleteUser(userID){
        return axios.delete(USER_BASE_API_URL + "/"+userID);
    }
}

export default new UserService();