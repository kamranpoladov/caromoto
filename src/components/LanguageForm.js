import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setLanguage, loadTranslations } from '../actions/language';
import axios from 'axios';
import API from '../utilities/api';

const LanguageForm = (props) => {
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('defaultLanguage') || props.language || 'en');

    const handleCurrentLanguageChange = async (lang) => {
        const translations = await axios.get(`${API}/culture/getresource`, {
            params: {
                culture: lang
            }
        });
        props.dispatch(loadTranslations(translations.data));
        props.dispatch(setLanguage(lang));
        setCurrentLanguage(lang);
        localStorage.setItem('defaultLanguage', lang);
    };

    return (
        <div className='header__top--lang-form'>
        {
            props.language.locales.map((locale) => (
                <a
                    key={locale.code}
                    onClick={() => {
                        handleCurrentLanguageChange(locale.name);
                    }}
                    className={
                        currentLanguage === locale.name 
                        ? 'header__top--lang-form__item header__top--lang-form__active header-text header__top--lang-form__item padding-small-right-left' 
                        : 'header__top--lang-form__item header-text padding-small-right-left'
                    }>
                    {locale.code}
                </a>
            ))
        }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        language: state.language,
    }
}

export default connect(mapStateToProps)(LanguageForm);