import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "04145de1-00f3-458a-abd0-9f3d6e343112",
    }
})

export const getUsersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    }
}

export const userProfileAPI = (userID) => {
    return instance.get(`profile/
    ${userID}`)
}

export const savePhotoAPI = (file) => {
    const formData = new FormData();
    formData.append("image", file)
    return instance.put(`profile/photo`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
};

export const saveProfileAPI = (profile) => {
    return instance.put(`profile/`, profile);
}

export const getProfileStatusAPI = (userID) => {
    return instance.get(`profile/status/${userID}`)
}

export const updateProfileStatusAPI = (status) => {
    return instance.put(`profile/status/`, {status})
}

export const authMeAPI = () => {
    return instance.get(`/auth/me`)
}

export const loginAPI = (email, password, rememberMe = false) => {
    return instance.post(`/auth/login`, {email, password, rememberMe})
}

export const logoutAPI = () => {
    return instance.delete(`/auth/login`)
}