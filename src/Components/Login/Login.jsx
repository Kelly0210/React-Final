import React from 'react';
import {Field, reduxForm} from "redux-form";
import {CustomInput} from "../../common/formControls";
import {requiredField} from "../../common/utils/validators/validator";
import {getCaptchaThunkCreator, loginThunkCreator, logoutThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "../../common/formControls.module.css"

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captchaForm)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>
}

const LoginForm = ({handleSubmit, error, ...props}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={"Email"} component={CustomInput} name={"email"} validate={[requiredField]}/>
        </div>
        <div>
            <Field placeholder={"Password"} component={CustomInput} name={"password"} validate={[requiredField]}
                   type={"password"}/>
        </div>
        <div>
            <Field type={"checkbox"} component={CustomInput} name={"rememberMe"}/> remember me
        </div>

        {props.captcha && <img src={props.captcha} alt="Captcha should be here"/>}
        {props.captcha && <Field placeholder={"Captcha symbols"} component={CustomInput} name={"captchaForm"}
                                 validate={[requiredField]}/>}
        {error &&
        <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
})

export default connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator, getCaptchaThunkCreator})(LoginPage)