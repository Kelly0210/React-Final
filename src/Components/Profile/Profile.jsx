import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    return <div>
        <ProfileInfo profile={props.profile}
                     profileStatus={props.profileStatus}
                     updateStatus={props.updateProfileStatusThunkCreator}
                     {...props}/>
        <MyPosts addPost={props.addPost}
                 {...props} />
    </div>
}

export default Profile;