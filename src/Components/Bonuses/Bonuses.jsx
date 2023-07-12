import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Bonuses.module.css';
import logo from '../../Assets/logo.png';
import info from '../../Assets/information-button.svg';
import arrow from '../../Assets/arrow-button.svg';
import fire from '../../Assets/fire-img.svg';

const Bonuses = (props) => {
    const {currentQuantity, forBurningQuantity, dateBurning} = props.bonuses;
    const error = props.error;

    let date = new Date(dateBurning);
    let day = date.getDate();
    let month = date.getMonth() + 1;

    const findWordForm = (quantity) => {
        const wordForms = ['бонус', 'бонуса', 'бонусов'];
        quantity = quantity%100;
        if(quantity > 10 && quantity < 20) return wordForms[2];
        if(quantity%10 > 1 && quantity%10 < 5) return wordForms[1];
        if(quantity%10 === 1) return wordForms[0];
        return wordForms[2];
    } 
   
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.header}>
                    <NavLink to='/home'>
                        <img className={s.logo} src={logo} alt="Логотип"/>
                    </NavLink>
                    <NavLink to='/info'>
                        <img className={s.info} src={info} alt="Инфо" />
                    </NavLink>
                </div>
                <div className={s.description}>
                    <div className={s.content}>
                        {
                            error 
                                ? <p>Упс... {error}</p>
                                : <>
                                    <div className={s.bonuses}>
                                        <div className={s.amount}>
                                            <p>{currentQuantity} {findWordForm(currentQuantity)}</p>
                                        </div>
                                        <div className={s.burnDown}>
                                            <p>{day}.{month < 10 ? '0'+month : month} сгорит <img className={s.fireImg} src={fire} alt="🔥"/> {forBurningQuantity} {findWordForm(forBurningQuantity)}</p>
                                        </div>
                                    </div>
                                    <NavLink to='/fullbonuses'>
                                        <img className={s.arrowButton} src={arrow} alt="Перейти" />
                                    </NavLink>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bonuses;