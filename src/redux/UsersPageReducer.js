import {UsersAPI} from "../API/API";

const TOGGLE_FOLLOW = "src/redux/authReducer/TOGGLE-FOLLOW";
const SET_USERS = "src/redux/authReducer/SET-USERS";
const SET_CURRENT_PAGE = "src/redux/authReducer/SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "src/redux/authReducer/SET-TOTAL-USERS-COUNT";
const IS_FETCHING = "src/redux/authReducer/IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "src/redux/authReducer/FOLLOWING_IN_PROGRESS";

let initialState = {
    // usersData: [
    //     {id: 1, fullName: "Dmitry", status: "I'am looking for job rn", isFollowed: false, location: {country: "Russia", city: "Moscow"} },
    //     {id: 2, fullName: "Sveta", status: "Follow to my onlyFans page!", isFollowed: false, location: {country: "Germany", city: "Dresden"}},
    //     {id: 3, fullName: "Vasiliy-Plumber", status: "Do you wet? I'm on my way ;)", isFollowed: false, location: {country: "USA", city: "Florida"}},
    //     {id: 4, fullName: "Irina", status: "I sleep only six hours a day!", isFollowed: false, location: {country: "Russia", city: "Omsk"}},
    //     {id: 5, fullName: "Alan", status: "DO YOU HAVE SLEEP?", isFollowed: false, location: {country: "Russia", city: "Omsk"} },
    // ],
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowed: false,
    followingInProgress: false,
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
        case SET_USERS:
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
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
            }
        default:
            return state
    }
}

export const toggleFollow = (userID) => ({type: TOGGLE_FOLLOW, userID})
export const setUsers = (usersData) => ({type: SET_USERS, usersData})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const followingInProgress = (isFetching) => ({type: FOLLOWING_IN_PROGRESS, isFetching})

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage))

    let response = await UsersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
}

export default UsersReducer;
