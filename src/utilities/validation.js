import validator from 'validator';
import store from '../store/configureStore';

export const validateEmail = (email) => {
    if (validator.isEmail(email)) {
        return '';
    } else if (!email) {
        return store.getState().language.translations.validation_email_requried;
    } else {
        return store.getState().language.translations.validation_email_invalid;
    }
};

export const validatePassword = (password) => {
    if (validator.isLength(password, {min: 6, max: undefined}))  {
        return '';
    } else {
        return store.getState().language.translations.validation_password_length
    }
};

export const validateConfirmPassword = (password, confirm) => {
    if (validator.equals(password, confirm)) {
        return '';
    } else {
        return store.getState().language.translations.validation_password_confirmation;
    }
};