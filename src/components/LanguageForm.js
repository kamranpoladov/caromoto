import React from 'react';
import i18n from '../i18n';

const LanguageForm = () => (
    <div className='header__top--lang-form'>
        <a
            onClick={() => {
                i18n.changeLanguage('en');
            }}
            className={
                i18n.language === 'en' 
                ? 'header__top--lang-form__item header__top--lang-form__active header-text header__top--lang-form__item' 
                : 'header__top--lang-form__item header-text'
            }>
            ENG
            <span className='padding-small-right-left'>|</span>
        </a>
        <a
            onClick={() => {
                i18n.changeLanguage('ru');
            }}
            className={
                i18n.language === 'ru' 
                ? 'header__top--lang-form__item header__top--lang-form__active header-text header__top--lang-form__item' 
                : 'header__top--lang-form__item header-text'
            }>
            RUS
            <span className='padding-small-right-left'>|</span>
        </a>
        <a
            onClick={() => {
                i18n.changeLanguage('es');
            }}
            className={
                i18n.language === 'es' 
                ? 'header__top--lang-form__item header__top--lang-form__active header-text header__top--lang-form__item' 
                : 'header__top--lang-form__item header-text'
            }>
            SPA
            <span className='padding-small-right-left'>|</span>
        </a>
        <a
            onClick={() => {
                i18n.changeLanguage('ro');
            }}
            className={
                i18n.language === 'ro' 
                ? 'header__top--lang-form__item header__top--lang-form__active header-text header__top--lang-form__item' 
                : 'header__top--lang-form__item header-text'
            }>
            ROM
            <span className='padding-small-right-left'>|</span>
        </a>
        <a
            onClick={() => {
                i18n.changeLanguage('ae');
            }}
            className={
                i18n.language === 'ae' 
                ? 'header__top--lang-form__item header__top--lang-form__active header-text header__top--lang-form__item' 
                : 'header__top--lang-form__item header-text'
            }>
            ARA
        </a>
    </div>
);

export default LanguageForm;