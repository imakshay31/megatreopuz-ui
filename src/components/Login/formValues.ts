import {object, string} from "yup";
export const initialValues = {
    username: "",
    password: ""
}

export const schema = object().shape({
    username: string().required(`Username cannot be empty`),
    password: string().required(`Password cannot be empty`)
})