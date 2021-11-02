import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0]);
        }
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_lXtKwsnKL7PQzuZPUkOz49upOxVsHqHDlNmcP9s85MrG7OWJupSzSQSOHB1NHr7GL4&usqp=CAU"}
                     alt=""/>
                     <br/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks profileStatus={props.profileStatus}
                                        updateStatus={props.updateProfileStatusThunkCreator}/>
            </div>
        </div>
    )
}

export default ProfileInfo;