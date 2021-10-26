import ProfilePageReducer, {addPost, deletePost} from "./ProfilePageReducer";

let state = {
    postsData: [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "How is your IT-Kamasutra", likesCount: 8},
        {id: 3, message: "Why nobody love me?", likesCount: 1},
        {id: 4, message: "Yo", likesCount: 0},
        {id: 5, message: "Yo", likesCount: 0},
    ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost("Success Message")

    // 2. action
    let newState = ProfilePageReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(6)
});

test("new text from message should be 'Success Message'", () => {
    // 1. test data
    let action = addPost("Success Message")

    // 2. action
    let newState = ProfilePageReducer(state, action)

    // 3. expectation
    expect(newState.postsData[5].message).toBe("Success Message")
});

test("after deleting should be decrement", () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = ProfilePageReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(4)
});

test("after deleting length shouldn't be decrement if ID is incorrect", () => {
    // 1. test data
    let action = deletePost(10000)

    // 2. action
    let newState = ProfilePageReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(5)
});
