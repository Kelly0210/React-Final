import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "537c4072-32b6-43db-afa9-bcef159ffcc3",
    }
})

export const getUsersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?
    page=${currentPage}
    &count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}

export const userProfileAPI = (userID) => {
    return instance.get(`profile/
    ${userID}`)
        .then(response => {
            return response.data
        });
}

export const getProfileStatusAPI = (userID) => {
    return instance.get(`profile/status/
    ${userID}`)
        .then(response => {
            return response.data
        });
}

export const updateProfileStatusAPI = (status) => {
    return instance.put(`profile/status/`, {status})
        .then(response => {
            return response.data
        });
}

export const authMeAPI = () => {
    return instance.get(`/auth/me`)
        .then(response => {
            return response.data
        })
}
