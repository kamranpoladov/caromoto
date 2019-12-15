import validator from 'validator';

export const validateEmail = (email) => {
    if (validator.isEmail(email)) {
        return '';
    } else if (!email) {
        return 'Please enter your email address.';
    } else {
        return 'Invalid email format';
    }
};

export const validatePassword = (password) => {
    if (validator.isLength(password, {min: 6, max: undefined}))  {
        return '';
    } else {
        return 'The password must be at least 6 characters long.';
    }
};

export const validateConfirmPassword = (password, confirm) => {
    if (validator.equals(password, confirm)) {
        return '';
    } else {
        return 'The password and confirmation password do not match.';
    }
};