import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setLanguage, loadTranslations, setCookie } from '../actions/language';
import axios from 'axios';
import API from '../utilities/api';

const LanguageForm = (props) => {
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('defaultLanguage') || props.language || 'en');

    const setCultureCookiesForServer = async (lang) => {
        try {
            let data = new FormData();
            data.set('culture', lang);
            const currentCulture = await axios.post(`${API}/culture/setcurrent`, data);
            props.dispatch(setCookie(currentCulture.data.cookie_name, currentCulture.data.cookie_value));
        } catch (error) {
            console.log(error);
        };
    };

    const loadTranslationsToStore = async (lang) => {
        try {
            const translations = await axios.get(`${API}/culture/getresource`, {
                params: {
                    culture: lang
                }
            });
            props.dispatch(loadTranslations(translations.data));
            props.dispatch(setLanguage(lang));
            setCurrentLanguage(lang);
            localStorage.setItem('defaultLanguage', lang);
        } catch (error) {
            console.log(error);
        };
    }

    const handleCurrentLanguageChange = async (lang) => {
        await setCultureCookiesForServer(lang);
        await loadTranslationsToStore(lang);
    };

    return (
        <div className='lang-form'>
            <ul className='lang-form__list'>
            {
                props.language.locales.map((locale) => (
                    <li 
                        className={
                            currentLanguage === locale.name 
                            ? 'lang-form__item lang-form__active header-text lang-form__item padding-small-right-left' 
                            : 'lang-form__item header-text padding-small-right-left'
                        }
                    >
                    <a
                        key={locale.code + '_li'}
                        onClick={() => {
                            handleCurrentLanguageChange(locale.name);
                        }}
                        >
                        {locale.code}
                    </a>
                    </li>
                ))
            }
            </ul>
            <select id='lang-select' className='lang-form__select' onChange={() => {
                const sel = document.getElementById('lang-select');
                handleCurrentLanguageChange(sel.value);
            }}>
            {
                props.language.locales.map((locale) => (
                    <option
                        selected={
                            currentLanguage === locale.name 
                            ? 'selected' 
                            : ''
                        }
                        key={locale.code + '_option'}
                        value={locale.name}
                    >
                    {locale.code}
                    </option>
                ))
            }
            </select>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        language: state.language,
    }
}

export default connect(mapStateToProps)(LanguageForm);