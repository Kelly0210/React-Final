import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "04145de1-00f3-458a-abd0-9f3d6e343112",
    }
})

export const ProfileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    getProfileStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status/`, {status})
    },
    saveTextProfile(profile) {
        //Save all info from user. Non include photo or status.
        return instance.put(`profile/`, profile);
    },
    saveAvatar(file) {
        const formData = new FormData();
        formData.append("image", file)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
}

export const LoginAPI = {
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    },
    authToServer() {
        //Send all data from user to server(Samurai)
        return instance.get(`/auth/me`)
    }
}