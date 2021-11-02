import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0]);
        }
    }

    const onSubmit = async (formData) => {
        await props.saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>*/}
            {/*</div>*/}
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_lXtKwsnKL7PQzuZPUkOz49upOxVsHqHDlNmcP9s85MrG7OWJupSzSQSOHB1NHr7GL4&usqp=CAU"}
                     alt=""/>
                <br/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                {editMode ? <ProfileDataForm initialValues={props.profile}
                                             profile={props.profile}
                                             isOwner={props.isOwner}
                                             onSubmit={onSubmit}/>

                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}/>}

                <ProfileStatusWithHooks profileStatus={props.profileStatus}
                                        updateStatus={props.updateProfileStatusThunkCreator}/>
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
        <div>
            <b>FullName: {props.profile.fullName}</b>
        </div>
        <div>
            <b>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</b>
        </div>
        {
            props.profile.lookingForAJob &&
            <div>
                <b>My professional skills: {props.profile.lookingForAJobDescription}</b>
            </div>
        }
        <div>
            <b>About me: {props.profile.aboutMe}</b>
        </div>
        <div>
            <b>Contacts: {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}</b>
        </div>
    </div>
}

const Contact = (props) => {
    return <div className={style.contact}>
        <b>{props.contactTitle}:</b> {props.contactValue}
    </div>
}

export default ProfileInfo;