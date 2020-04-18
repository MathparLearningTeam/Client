import {extend} from 'vee-validate'
import api from "../api";
import {email as emailRule, required as requiredRule} from "vee-validate/dist/rules";

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{8,})");

const password = extend('password', {
    validate(value){
        return strongRegex.exec(value)
    },
    message: 'Password is too weak. Password constraints are: at least 1 uppercase letter, 1 lowercase letter, 1 symbol, 1 digit, 8 symbol in length'
})

const emailAvailable = extend('email-available', async value => {
    console.log('Checking email availability')
    return await api.account.checkEmail(value).then(data => {
        return data.available ? true : 'Email is already taken'
    })
})

const email = extend('email', {
    ...emailRule,
    message: 'Email should be in valid format'
})

const required = extend('required',{
    ...requiredRule,
    message: 'This field is required'
})

export {password, emailAvailable, email, required}