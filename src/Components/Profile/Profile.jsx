import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    return <div>
        <ProfileInfo isOwner={props.isOwner}
                     profile={props.profile}
                     profileStatus={props.profileStatus}
                     updateStatus={props.updateProfileStatusThunkCreator}
                     savePhoto={props.savePhoto}
                     {...props}/>
        <MyPosts addPost={props.addPost}
                 {...props} />
    </div>
}

export default Profile;