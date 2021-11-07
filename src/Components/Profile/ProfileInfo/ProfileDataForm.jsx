import React from "react";
import {CustomInput, CustomTextArea} from "../../../common/formControls";
import style from './ProfileInfo.module.css';
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({error, ...props}) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error &&
        <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>FullName:</b> <Field placeholder="Full Name"
                                    name="fullName"
                                    component={CustomInput}/>
        </div>
        <div>
            <b>Looking for a job:</b> <Field type="checkbox"
                                             name="lkgForAJob"
                                             component={CustomInput}/>
        </div>
        <div>
            <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
            <Field placeholder="My professional skills"
                   name="professionalSkill"
                   component={CustomTextArea}/>
        </div>
        <div>
            <b>About me:</b> {props.profile.aboutMe}
            <Field placeholder="About Me"
                   name="aboutMe"
                   component={CustomTextArea}/>
        </div>
        <div>
            <b>Contacts: {Object.keys(props.profile.contacts).map(key => {
                return <div className={style.contact} key={key}>
                    <b>{key}:</b> <Field placeholder={key}
                                         name={"contacts." + key}
                                         component={CustomTextArea}/>
                </div>
            })}</b>
        </div>
    </form>
}

const ProfileDataFormRedux = reduxForm({form: 'profileDataForm'})(ProfileDataForm)

export default ProfileDataFormRedux;