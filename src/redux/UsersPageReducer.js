const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const GET_USERS = "GET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const IS_FETCHING = "IS-FETCHING";

let initialState = {
    // usersData: [
    //     {id: 1, fullName: "Dmitry", status: "I'am looking for job rn", isFollowed: false, location: {country: "Russia", city: "Moscow"} },
    //     {id: 2, fullName: "Sveta", status: "Follow to my onlyFans page!", isFollowed: false, location: {country: "Germany", city: "Dresden"}},
    //     {id: 3, fullName: "Vasiliy-Plumber", status: "Do you wet? I'm on my way ;)", isFollowed: false, location: {country: "USA", city: "Florida"}},
    //     {id: 4, fullName: "Irina", status: "I sleep only six hours a day!", isFollowed: false, location: {country: "Russia", city: "Omsk"}},
    //     {id: 5, fullName: "Alan", status: "DO YOU HAVE SLEEP?", isFollowed: false, location: {country: "Russia", city: "Omsk"} },
    // ],
    usersData: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userID) {
                        return {...user, isFollowed: !user.isFollowed}
                    }
                    return user;
                })
            }
        case GET_USERS:
            return {
                ...state,
                usersData: action.usersData
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
            ...state,
            totalUsersCount: action.count
        }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const toggleFollow = (userID) => {
    return {
        type: TOGGLE_FOLLOW,
        userID,
    }
}

export const getUsers = (usersData) => {
    return {
        type: GET_USERS,
        usersData
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}

export const isFetching = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
}

export default UsersReducer;
