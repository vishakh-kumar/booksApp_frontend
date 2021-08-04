import React from "react";
import { useFormikContext } from "formik";

import AppFormInput from "../AppFormInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
    const { setFieldTouched, handleChange, errors, touched, isSubmitting } =
        useFormikContext();
    return (
        <>
            <AppFormInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormField;
