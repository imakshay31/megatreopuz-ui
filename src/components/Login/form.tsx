import React, { useState, useEffect } from "react";
import "formik";
import { Formik, Form, Field, FieldProps } from "formik";
import { initialValues, schema } from "./formValues";
import {
    TextField,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText,
    FormControlLabel,
    Checkbox,
    Typography,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

interface Props {
    onSubmit: (values: typeof initialValues) => void | Promise<void>;
}

const Username: React.FC = () => {
    const [shrink, setShrink] = useState(false);
    useEffect(() => {
        setTimeout(() => setShrink(true));
    });
    return (
        <Field name="username">
            {({
                field,
                meta,
            }: FieldProps<typeof initialValues["username"]>) => (
                <TextField
                    disabled={!shrink}
                    id="username"
                    InputLabelProps={{ shrink }}
                    margin="dense"
                    label="Username"
                    fullWidth
                    variant="outlined"
                    error={!!(meta.touched && meta.error)}
                    {...field}
                    helperText={meta.touched && meta.error ? meta.error : " "}
                />
            )}
        </Field>
    );
};

const RememberCheckBox: React.FC = () => {
    return (
        <Field name="rememberMe">
            {({ field }: FieldProps<typeof initialValues["rememberMe"]>) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            size="small"
                            color="primary"
                            checked={field.value}
                            onChange={field.onChange}
                            name={field.name}
                        />
                    }
                    label={
                        <Typography variant="body2" color="textSecondary">
                            Keep me logged in
                        </Typography>
                    }
                />
            )}
        </Field>
    );
};

const Password: React.FC = () => {
    const [shrink, setShrink] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        setTimeout(() => setShrink(true));
    });
    return (
        <Field name="password">
            {({
                field,
                meta,
            }: FieldProps<typeof initialValues["password"]>) => {
                const error = meta.touched && meta.error ? meta.error : " ";
                const hasError = !!(meta.touched && meta.error);
                return (
                    <FormControl margin="dense" fullWidth variant="outlined">
                        <InputLabel
                            error={hasError}
                            shrink={shrink}
                            htmlFor="password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            notched={shrink}
                            disabled={!shrink}
                            id="password"
                            margin="dense"
                            type={showPassword ? "text" : "password"}
                            {...field}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() =>
                                            setShowPassword((p) => !p)
                                        }
                                        edge="end">
                                        {showPassword ? (
                                            <Visibility
                                                color={
                                                    hasError
                                                        ? "error"
                                                        : "action"
                                                }
                                            />
                                        ) : (
                                            <VisibilityOff
                                                color={
                                                    hasError
                                                        ? "error"
                                                        : "action"
                                                }
                                            />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            error={hasError}
                        />
                        <FormHelperText error={hasError}>
                            {error}
                        </FormHelperText>
                    </FormControl>
                );
            }}
        </Field>
    );
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik<typeof initialValues>
            onSubmit={async (values, helpers) => {
                await onSubmit(values);
                helpers.setSubmitting(false);
            }}
            initialValues={initialValues}
            validationSchema={schema}>
            <Form id="login-form">
                <Username />
                <Password />
                <RememberCheckBox />
            </Form>
        </Formik>
    );
};

export default LoginForm;
