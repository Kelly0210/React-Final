import React from 'react';
import {Field, reduxForm} from "redux-form";
import {CustomInput} from "../../common/formControls";
import {requiredField} from "../../common/utils/validators/validator";

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} component={CustomInput} name={"login"} validate={[requiredField]}/>
        </div>
        <div>
            <Field placeholder={"Password"} component={CustomInput} name={"password"} validate={[requiredField]}/>
        </div>
        <div>
            <Field type={"checkbox"} component={CustomInput} name={"rememberMe"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginPage;