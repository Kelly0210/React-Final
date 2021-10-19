import React from 'react';
import style from "./formControls.module.css"

const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <Element {...input} {...props} />
        {hasError && <span> {meta.error} </span>}
    </div>

};


export const CustomTextArea = Element("textarea");
export const CustomInput = Element("input");

